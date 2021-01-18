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

import {fireEvent, render} from '@testing-library/react';
import React, {useContext} from 'react';

import AppContext, {
	createReducer,
} from '../../../src/main/resources/META-INF/resources/data_layout_builder/js/AppContext.es';
import {FORM_VIEW} from '../../utils/constants.es';
import AppContextProviderWrapper from './AppContextProviderWrapper.es';

const {getDataLayoutBuilderProps} = FORM_VIEW;

const getStoreValue = {
	pages: [
		{
			rows: [
				{
					columns: [
						{
							fields: [
								{
									fieldName: 'Text99833718',
									predefinedValue: '',
									tooltip: '',
									type: 'text',
									dir: 'ltr',
									locale: 'en_US',
									localizedValue: {},
									showLabel: true,
									enabled: true,
									required: false,
									valid: true,
									displayStyle: 'singleline',
									instanceId: 'DaSziKEN',
									repeatable: false,
									options: [
										{
											reference: '',
											label: 'Option',
											value: '',
										},
									],
									fieldReference: 'Text99833718',
									tip: 'New Help Text',
									placeholder: 'New Placeholder Text',
									visible: true,
									settingsContext: {
										pages: [
											{
												showRequiredFieldsWarning: false,
												description: null,
												localizedDescription: {},
												rows: [
													{
														columns: [
															{
																size: 12,
																fields: [
																	{
																		fieldName:
																			'label',
																		tooltip:
																			'Enter a descriptive field label that guides users to enter the information you want.',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		localizedValue: {
																			en_US:
																				'New Test',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'BMggDATh',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'label',
																		tip: '',
																		placeholder:
																			'Enter a field label.',
																		value:
																			'New Test',
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Label',
																		visibilityExpression:
																			'TRUE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$label$BMggDATh$0$$en_US',
																		localizable: true,
																	},
																	{
																		fieldName:
																			'placeholder',
																		tooltip:
																			'Enter text that assists the user, but is not submitted as a field value.',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		localizedValue: {
																			en_US:
																				'New Placeholder Text',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'4LVtAk8K',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'placeholder',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'New Placeholder Text',
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Placeholder Text',
																		visibilityExpression:
																			'TRUE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$placeholder$4LVtAk8K$0$$en_US',
																		localizable: true,
																	},
																	{
																		fieldName:
																			'tip',
																		tooltip:
																			'Add a comment to help users understand the field label.',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		localizedValue: {
																			en_US:
																				'New Help Text',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'TVDPhDIx',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'tip',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'New Help Text',
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Help Text',
																		visibilityExpression:
																			'TRUE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$tip$TVDPhDIx$0$$en_US',
																		localizable: true,
																	},
																	{
																		fieldName:
																			'displayStyle',
																		evaluable: true,
																		predefinedValue:
																			'singleline',
																		type:
																			'radio',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		instanceId:
																			'FA3DnjFK',
																		repeatable: false,
																		options: [
																			{
																				reference:
																					'singleline',
																				label:
																					'Single Line',
																				value:
																					'singleline',
																			},
																			{
																				reference:
																					'multiline',
																				label:
																					'Multiple Lines',
																				value:
																					'multiline',
																			},
																		],
																		fieldReference:
																			'displayStyle',
																		tip: '',
																		value:
																			'singleline',
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Field Type',
																		visibilityExpression:
																			'TRUE',
																		inline: false,
																		name:
																			'ddm$$displayStyle$FA3DnjFK$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'required',
																		predefinedValue: false,
																		systemSettingsURL:
																			'',
																		showAsSwitcher: true,
																		type:
																			'checkbox',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		instanceId:
																			'lZHRIZkW',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'required',
																		tip: '',
																		value: false,
																		showMaximumRepetitionsInfo: false,
																		visible: true,
																		dataType:
																			'boolean',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Required Field',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$required$lZHRIZkW$0$$en_US',
																		localizable: false,
																	},
																],
															},
														],
													},
												],
											},
										],
									},
								},
							],
						},
					],
				},
			],
		},
	],
};

const defaultState = {
	dataDefinition: {
		availableLanguageIds: ['en_US'],
		dataDefinitionFields: [
			{
				customProperties: {
					placeholder: {
						en_US: '',
					},
					displayStyle: 'singleline',
					fieldReference: 'Text21199104',
					visibilityExpression: '',
					fieldNamespace: '',
					nativeField: false,
					dataType: 'string',
					validation: {
						expression: {},
						parameter: {},
						errorMessage: {},
					},
					tooltip: {
						en_US: '',
					},
					autocomplete: false,
					dataSourceType: 'manual',
					ddmDataProviderInstanceId: [],
					ddmDataProviderInstanceOutput: [],
					options: {
						en_US: [
							{
								reference: '',
								label: 'Option',
								value: '',
								edited: true,
							},
						],
					},
				},
				nestedDataDefinitionFields: [],
				label: {
					en_US: 'Text',
				},
				tip: {
					en_US: '',
				},
				required: false,
				name: 'Text21199104',
				defaultValue: {
					en_US: '',
				},
				indexType: 'keyword',
				localizable: true,
				readOnly: false,
				fieldType: 'text',
				showLabel: true,
				repeatable: false,
			},
		],
	},
	dataDefinitionId: 40337,
	dataLayout: {
		dataLayoutFields: {
			Text21199104: {
				label: {
					en_US: 'Text',
				},
				placeholder: {
					en_US: '',
				},
				tip: {
					en_US: '',
				},
				predefinedValue: {
					en_US: '',
				},
				showLabel: true,
				required: false,
			},
		},
	},
};

const ContextWrapper = ({children, dataLayoutBuilder}) => (
	<AppContextProviderWrapper
		dataLayoutBuilder={dataLayoutBuilder}
		initialState={defaultState}
	>
		{children}
	</AppContextProviderWrapper>
);

const AppContextInputWrapper = () => {
	const [state, dispatch] = useContext(AppContext);

	const defaultLanguageId = 'en_US';
	const dataDefinitionField = state.dataDefinition.dataDefinitionFields[0];
	const label = dataDefinitionField.label[defaultLanguageId];

	const onChange = ({target: {value}}) => {
		dispatch({
			payload: {
				dataDefinitionFields: [
					{
						...dataDefinitionField,
						label: {
							[defaultLanguageId]: value,
						},
					},
				],
			},
			type: 'UPDATE_DATA_DEFINITION_FIELDS',
		});

		// dispatch({type: 'UPDATE_PAGES'});

	};

	// useEffect(() => {
	// 	dispatch({type: 'UPDATE_PAGES'});
	// }, [dispatch, label]);

	console.log(label);

	return (
		<div>
			<label>Label</label>
			<input onChange={onChange} type="text" value={label} />
		</div>
	);
};

describe('AppContext', () => {
	let dataLayoutBuilder;

	beforeEach(() => {
		dataLayoutBuilder = {
			...getDataLayoutBuilderProps(),
			getDataDefinitionAndDataLayout: jest
				.fn()
				.mockImplementation(() => ({
					dataLayoutPages: [
						{
							dataLayoutRows: [
								{
									dataLayoutColumns: [
										{
											columnSize: 12,
											fieldNames: ['Text21199104'],
										},
									],
								},
							],
							description: {
								en_US: '',
							},
							title: {
								en_US: '',
							},
						},
					],
					dataRules: [],
					paginationMode: 'single-page',
				})),
			getDataDefinitionField: jest
				.fn()
				.mockImplementation(
					() => defaultState.dataDefinition.dataDefinitionFields[0]
				),
			getStore: jest.fn().mockImplementation(() => getStoreValue),
		};
	});

	xit('renders', () => {
		expect(1).toBe(1);

		const {container, debug} = render(
			<ContextWrapper dataLayoutBuilder={dataLayoutBuilder}>
				<AppContextInputWrapper />
			</ContextWrapper>
		);

		fireEvent.change(container.querySelector('input'), {
			target: {value: 'joao'},
		});

		debug();
	});

	it('UPDATE_PAGES', () => {
		const defaultInputValue = {
			label: {en_US: 'Text'},
			placeholder: {en_US: ''},
			tip: {en_US: ''},
			predefinedValue: {en_US: ''},
			showLabel: true,
			required: false,
		};
		expect(defaultState.dataLayout.dataLayoutFields.Text21199104).toEqual(
			defaultInputValue
		);

		const reducer = createReducer(dataLayoutBuilder);
		const result = reducer(defaultState, {type: 'UPDATE_PAGES'});

		const changedInputValue = {
			label: {en_US: 'New Test'},
			placeholder: {en_US: 'New Placeholder Text'},
			tip: {en_US: 'New Help Text'},
			predefinedValue: {en_US: ''},
			showLabel: true,
			required: false,
		};

		expect(result.dataLayout.dataLayoutFields.Text21199104).toEqual(
			changedInputValue
		);
	});
});
