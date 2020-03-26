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

import PropTypes from 'prop-types';
import React, {useMemo} from 'react';

import {EDITABLE_FLOATING_TOOLBAR_BUTTONS} from '../../config/constants/editableFloatingToolbarButtons';
import {EDITABLE_FLOATING_TOOLBAR_CLASSNAMES} from '../../config/constants/editableFloatingToolbarClassNames';
import {EDITABLE_TYPES} from '../../config/constants/editableTypes';
import selectEditableValue from '../../selectors/selectEditableValue';
import {useSelector} from '../../store/index';
import {useIsActive} from '../Controls';
import FloatingToolbar from '../floating-toolbar/FloatingToolbar';
import {useEditableProcessorUniqueId} from './EditableProcessorContext';
import getEditableUniqueId from './getEditableUniqueId';

export default function FragmentContentFloatingToolbar({
	editables,
	fragmentEntryLinkId,
	onButtonClick,
}) {
	const isActive = useIsActive();
	const editableProcessorUniqueId = useEditableProcessorUniqueId();

	const editable = useMemo(() => {
		let activeEditable = {
			editableId: null,
			editableValueNamespace: null,
			element: null,
			processor: null,
		};

		if (editables) {
			activeEditable =
				editables.find(editable =>
					isActive(
						getEditableUniqueId(
							fragmentEntryLinkId,
							editable.editableId
						)
					)
				) || activeEditable;
		}

		return activeEditable;
	}, [editables, fragmentEntryLinkId, isActive]);

	const state = useSelector(state => state);

	const editableValue = selectEditableValue(
		state,
		fragmentEntryLinkId,
		editable.editableId,
		editable.editableValueNamespace
	);

	const editableHasActiveProcessor =
		editableProcessorUniqueId !==
		getEditableUniqueId(fragmentEntryLinkId, editable.editableId);

	const floatingToolbarButtons = useMemo(() => {
		if (!editable.editableId) {
			return [];
		}

		const {
			classNameId,
			classPK,
			config = {},
			fieldId,
			mappedField,
		} = editableValue;

		const showLinkButton =
			editable.type == EDITABLE_TYPES.text ||
			editable.type == EDITABLE_TYPES.image ||
			editable.type == EDITABLE_TYPES.link;

		const buttons = [];

		if (showLinkButton) {
			EDITABLE_FLOATING_TOOLBAR_BUTTONS.link.className =
				config.href ||
				(config.classNameId && config.classPK && config.fieldId) ||
				config.mappedField
					? EDITABLE_FLOATING_TOOLBAR_CLASSNAMES.linked
					: '';
			buttons.push(EDITABLE_FLOATING_TOOLBAR_BUTTONS.link);
		}

		if (
			(editable.type === EDITABLE_TYPES.image ||
				editable.type === EDITABLE_TYPES.backgroundImage) &&
			!editableValue.mappedField &&
			!editableValue.fieldId
		) {
			buttons.push(EDITABLE_FLOATING_TOOLBAR_BUTTONS.imageProperties);
		}
		else {
			EDITABLE_FLOATING_TOOLBAR_BUTTONS.edit.className =
				(classNameId && classPK && fieldId) || mappedField
					? EDITABLE_FLOATING_TOOLBAR_CLASSNAMES.disabled
					: '';
			buttons.push(EDITABLE_FLOATING_TOOLBAR_BUTTONS.edit);
		}

		EDITABLE_FLOATING_TOOLBAR_BUTTONS.map.className =
			(classNameId && classPK && fieldId) || mappedField
				? EDITABLE_FLOATING_TOOLBAR_CLASSNAMES.mapped
				: '';
		buttons.push(EDITABLE_FLOATING_TOOLBAR_BUTTONS.map);

		return buttons;
	}, [editable.editableId, editable.type, editableValue]);

	return (
		editable.editableId &&
		editableHasActiveProcessor && (
			<FloatingToolbar
				buttons={floatingToolbarButtons}
				item={{
					editableId: editable.editableId,
					editableType: editable.type,
					fragmentEntryLinkId,
					itemId: getEditableUniqueId(
						fragmentEntryLinkId,
						editable.editableId
					),
				}}
				itemRef={{current: editable.element}}
				onButtonClick={buttonId =>
					onButtonClick(buttonId, editable.editableId)
				}
			/>
		)
	);
}

FragmentContentFloatingToolbar.propTypes = {
	editables: PropTypes.arrayOf(
		PropTypes.shape({
			editableId: PropTypes.string.isRequired,
			editableValueNamespace: PropTypes.string.isRequired,
			element: PropTypes.instanceOf(HTMLElement).isRequired,
			processor: PropTypes.object,
		})
	),
	fragmentEntryLinkId: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func.isRequired,
};
