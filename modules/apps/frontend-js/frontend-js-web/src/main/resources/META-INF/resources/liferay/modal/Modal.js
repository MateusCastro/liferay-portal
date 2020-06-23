/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

import ClayButton from '@clayui/button';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import ClayModal, {useModal} from '@clayui/modal';
import classNames from 'classnames';
import {render} from 'frontend-js-react-web';
import dom from 'metal-dom';
import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState} from 'react';

import './Modal.scss';
import navigate from '../util/navigate.es';

const openModal = (props) => {
	if (
		props &&
		props.url &&
		props.bodyHTML &&
		process.env.NODE_ENV === 'development'
	) {
		console.warn(
			'url and bodyHTML props are both set. bodyHTML will be ignored. Please use one or another.'
		);
	}

	// Mount in detached node; Clay will take care of appending to `document.body`.
	// See: https://github.com/liferay/clay/blob/master/packages/clay-shared/src/Portal.tsx

	render(Modal, props, document.createElement('div'));
};

const openPortletModal = ({
	iframeBodyCssClass,
	portletSelector,
	subTitle,
	title,
	url,
}) => {
	const portlet = document.querySelector(portletSelector);

	if (portlet && url) {
		const titleElement =
			portlet.querySelector('.portlet-title') ||
			portlet.querySelector('.portlet-title-default');

		if (titleElement) {
			if (portlet.querySelector('#cpPortletTitle')) {
				const titleTextElement = titleElement.querySelector(
					'.portlet-title-text'
				);

				if (titleTextElement) {
					title = `${titleTextElement.outerHTML} - ${title}`;
				}
			}
			else {
				title = `${titleElement.textContent} - ${title}`;
			}
		}

		let headerHTML;

		if (subTitle) {
			headerHTML = `${title}<div class="portlet-configuration-subtitle small"><span class="portlet-configuration-subtitle-text">${subTitle}</span></div>`;
		}

		openModal({
			headerHTML,
			iframeBodyCssClass,
			title,
			url,
		});
	}
};

/**
 * A utility with API that matches Liferay.Portlet.openWindow. The purpose of
 * this utility is backwards compatibility.
 * @deprecated As of Athanasius (7.3.x), replaced by Liferay.Portlet.openModal
 */
const openPortletWindow = ({bodyCssClass, portlet, uri, ...otherProps}) => {
	openPortletModal({
		iframeBodyCssClass: bodyCssClass,
		portletSelector: portlet,
		url: uri,
		...otherProps,
	});
};

const Modal = ({
	bodyHTML,
	buttons,
	customEvents = [],
	headerHTML,
	height,
	id,
	iframeBodyCssClass,
	iframeProps = {},
	onClose,
	onOpen,
	onSelect,
	selectEventName,
	selectedData,
	size,
	title,
	url,
}) => {
	const [loading, setLoading] = useState(true);
	const [visible, setVisible] = useState(true);

	const eventHandlersRef = useRef([]);

	const {observer} = useModal({
		onClose: () => processClose(),
	});

	const disableSelectedItems = ({container}) => {
		if (!selectedData) {
			return;
		}

		const selectedDataSet = new Set(selectedData);

		const itemElements = container.querySelectorAll('.selector-button');

		itemElements.forEach((itemElement) => {
			const itemId =
				itemElement.dataset.entityid || itemElement.dataset.entityname;

			if (selectedDataSet.has(itemId)) {
				itemElement.disabled = true;
			}
		});
	};

	const onButtonClick = ({formId, onClick, type}) => {
		if (type === 'cancel') {
			processClose();
		}
		else if (url && type === 'submit') {
			const iframe = document.querySelector('.liferay-modal iframe');

			if (iframe) {
				const iframeDocument = iframe.contentWindow.document;

				const forms = iframeDocument.querySelectorAll('form');

				if (
					forms.length !== 1 &&
					process.env.NODE_ENV === 'development'
				) {
					console.warn('There should be one form within a modal.');
				}

				if (formId) {
					const form = iframeDocument.getElementById(formId);

					if (form) {
						form.submit();
					}
				}
				else if (forms.length >= 1) {
					forms[0].submit();
				}
			}
		}

		if (onClick) {
			onClick();
		}
	};

	const processClose = useCallback(() => {
		setVisible(false);

		document.body.classList.remove('modal-open');

		const eventHandlers = eventHandlersRef.current;

		eventHandlers.forEach((eventHandler) => {
			eventHandler.detach();
		});

		eventHandlers.splice(0, eventHandlers.length);

		if (onClose) {
			onClose();
		}
	}, [eventHandlersRef, onClose]);

	const Body = ({html}) => {
		const bodyRef = useRef();

		useEffect(() => {
			const fragment = document
				.createRange()
				.createContextualFragment(html);

			disableSelectedItems({container: fragment});

			bodyRef.current.innerHTML = '';

			bodyRef.current.appendChild(fragment);

			if (onOpen) {
				onOpen();
			}
		}, [html]);

		return <div className="liferay-modal-body" ref={bodyRef}></div>;
	};

	useEffect(() => {
		const eventHandlers = eventHandlersRef.current;

		if (visible) {
			if (onSelect && selectEventName) {
				const selectEventHandler = Liferay.once(
					selectEventName,
					(selectedItem) => {
						processClose();

						onSelect(selectedItem);
					}
				);

				eventHandlers.push(selectEventHandler);
			}

			customEvents.forEach((customEvent) => {
				if (customEvent.name && customEvent.onEvent) {
					const eventHandler = Liferay.on(
						customEvent.name,
						(event) => {
							customEvent.onEvent(event);
						}
					);

					eventHandlers.push(eventHandler);
				}
			});

			const closeEventHandler = Liferay.on('closeModal', (event) => {
				if (event.id && id && event.id !== id) {
					return;
				}

				processClose();

				if (event.redirect) {
					navigate(event.redirect);
				}
			});

			eventHandlers.push(closeEventHandler);
		}

		return () => {
			eventHandlers.forEach((eventHandler) => {
				eventHandler.detach();
			});

			eventHandlers.splice(0, eventHandlers.length);
		};
	}, [
		customEvents,
		eventHandlersRef,
		id,
		onClose,
		onOpen,
		onSelect,
		processClose,
		selectEventName,
		visible,
	]);

	return (
		<>
			{visible && (
				<ClayModal
					className="liferay-modal"
					id={id}
					observer={observer}
					size={url && !size ? 'full-screen' : size}
				>
					<ClayModal.Header>
						{headerHTML ? (
							<div
								dangerouslySetInnerHTML={{
									__html: headerHTML,
								}}
							></div>
						) : (
							title
						)}
					</ClayModal.Header>
					<div
						className={classNames('modal-body', {
							'modal-body-iframe': url,
						})}
						style={{
							height,
						}}
					>
						{url ? (
							<>
								{loading && <ClayLoadingIndicator />}
								<Iframe
									disableSelectedItems={disableSelectedItems}
									iframeBodyCssClass={iframeBodyCssClass}
									iframeProps={{
										id: id && `${id}_iframe_`,
										...iframeProps,
									}}
									onOpen={onOpen}
									processClose={processClose}
									title={title}
									updateLoading={(loading) => {
										setLoading(loading);
									}}
									url={url}
								/>
							</>
						) : (
							<>{bodyHTML && <Body html={bodyHTML} />}</>
						)}
					</div>
					{buttons && (
						<ClayModal.Footer
							last={
								<ClayButton.Group spaced>
									{buttons.map((button, index) => (
										<ClayButton
											displayType={button.displayType}
											id={button.id}
											key={index}
											onClick={() => {
												onButtonClick(button);
											}}
											type={
												button.type === 'cancel'
													? 'button'
													: button.type
											}
										>
											{button.label}
										</ClayButton>
									))}
								</ClayButton.Group>
							}
						/>
					)}
				</ClayModal>
			)}
		</>
	);
};

const CSS_CLASS_IFRAME_BODY = 'dialog-iframe-popup';

class Iframe extends React.Component {
	constructor(props) {
		super(props);

		this.iframeRef = React.createRef();

		const iframeURL = new URL(props.url);

		const namespace = iframeURL.searchParams.get('p_p_id');

		let bodyCssClass = CSS_CLASS_IFRAME_BODY;

		if (props.iframeBodyCssClass) {
			bodyCssClass = `${bodyCssClass} ${props.iframeBodyCssClass}`;
		}

		iframeURL.searchParams.set(`_${namespace}_bodyCssClass`, bodyCssClass);

		this.state = {loading: true, src: iframeURL.toString()};
	}

	componentDidUpdate(prevProps, prevState) {
		if (!this.state.loading && prevState.loading) {
			Liferay.fire('modalIframeLoaded', {src: this.state.src});

			if (this.props.onOpen) {
				this.props.onOpen();
			}
		}
	}

	componentWillUnmount() {
		if (this.beforeScreenFlipHandler) {
			Liferay.detach(this.beforeScreenFlipHandler);
		}

		if (this.delegateHandler) {
			this.delegateHandler.removeListener();
		}
	}

	onLoadHandler = () => {
		const iframeWindow = this.iframeRef.current.contentWindow;

		this.delegateHandler = dom.delegate(
			iframeWindow.document,
			'click',
			'.btn-cancel,.lfr-hide-dialog',
			() => this.props.processClose()
		);

		iframeWindow.document.body.classList.add(CSS_CLASS_IFRAME_BODY);

		if (iframeWindow.Liferay.SPA) {
			this.beforeScreenFlipHandler = iframeWindow.Liferay.on(
				'beforeScreenFlip',
				() => {
					iframeWindow.document.body.classList.add(
						CSS_CLASS_IFRAME_BODY
					);
				}
			);
		}

		this.props.disableSelectedItems({
			container: iframeWindow.document.body,
		});

		this.props.updateLoading(false);

		this.setState({loading: false});

		iframeWindow.onunload = () => {
			this.props.updateLoading(true);

			this.setState({loading: true});
		};
	};

	render() {
		return (
			<iframe
				{...this.props.iframeProps}
				className={classNames({
					hide: this.state.loading,
				})}
				onLoad={this.onLoadHandler}
				ref={this.iframeRef}
				src={this.state.src}
				title={this.props.title}
			/>
		);
	}
}

Modal.propTypes = {
	bodyHTML: PropTypes.string,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			displayType: PropTypes.oneOf([
				'link',
				'primary',
				'secondary',
				'unstyled',
			]),
			formId: PropTypes.string,
			id: PropTypes.string,
			label: PropTypes.string,
			onClick: PropTypes.func,
			type: PropTypes.oneOf(['cancel', 'submit']),
		})
	),
	customEvents: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			onEvent: PropTypes.func,
		})
	),
	headerHTML: PropTypes.string,
	height: PropTypes.string,
	id: PropTypes.string,
	iframeProps: PropTypes.object,
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	onSelect: PropTypes.func,
	selectEventName: PropTypes.string,
	selectedData: PropTypes.array,
	size: PropTypes.oneOf(['full-screen', 'lg', 'sm']),
	title: PropTypes.string,
	url: PropTypes.string,
};

export {Modal, openModal, openPortletModal, openPortletWindow};
