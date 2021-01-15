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

import {act, cleanup, fireEvent, render} from '@testing-library/react';
import React, {useContext, useEffect, useState} from 'react';

import AppContext from '../../../src/main/resources/META-INF/resources/data_layout_builder/js/AppContext.es';
import {
	DATA_DEFINITION_RESPONSES,
	ENTRY,
	FORM_VIEW,
} from '../../utils/constants.es';
import AppContextProviderWrapper from './AppContextProviderWrapper.es';

const {getDataLayoutBuilderProps} = FORM_VIEW;

const getStoreValue = {
	pages: [
		{
			showRequiredFieldsWarning: false,
			description: '',
			localizedDescription: {
				en_US: '',
			},
			rows: [
				{
					columns: [
						{
							size: 12,
							fields: [
								{
									fieldName: 'Text21199104',
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
									instanceId: 'abb3Bq3D',
									repeatable: false,
									options: [
										{
											reference: '',
											label: 'Option',
											value: '',
										},
									],
									fieldReference: 'Text21199104',
									tip: '',
									placeholder: '',
									visible: true,
									settingsContext: {
										submitLabel: 'Submit',
										templateNamespace: 'ddm.tabbed_form',
										ddmStructureLayoutId: '0',
										redirectURL: null,
										cancelLabel: 'Cancel',
										groupId: '0',
										defaultLanguageId: 'en_US',
										readOnly: false,
										rules: [
											{
												condition:
													"not(equals(getValue('ddmDataProviderInstanceId'), ''))",
												enable: true,
												actions: [
													"call('getDataProviderInstanceOutputParameters', 'dataProviderInstanceId=ddmDataProviderInstanceId', 'ddmDataProviderInstanceOutput=outputParameterNames')",
												],
											},
											{
												condition:
													"not(equals(getValue('displayStyle'), 'singleline'))",
												enable: true,
												actions: [
													"setValue('autocomplete', FALSE)",
													"setVisible('autocomplete', FALSE)",
												],
											},
											{
												condition: 'TRUE',
												enable: true,
												actions: [
													"setRequired('ddmDataProviderInstanceId', equals(getValue('dataSourceType'), \"data-provider\"))",
													"setRequired('ddmDataProviderInstanceOutput', equals(getValue('dataSourceType'), \"data-provider\"))",
													"setValidationDataType('validation', getValue('dataType'))",
													"setValidationFieldName('validation', getValue('name'))",
													"setVisible('dataSourceType', getValue('autocomplete'))",
													"setVisible('ddmDataProviderInstanceId', equals(getValue('dataSourceType'), \"data-provider\") and getValue('autocomplete'))",
													"setVisible('ddmDataProviderInstanceOutput', equals(getValue('dataSourceType'), \"data-provider\") and getValue('autocomplete'))",
													"setVisible('options', contains(getValue('dataSourceType'), \"manual\") and getValue('autocomplete'))",
												],
											},
											{
												condition:
													"not(equals(getValue('dataSourceType'), \"data-provider\")) or not(getValue('autocomplete'))",
												enable: true,
												actions: [
													"setValue('ddmDataProviderInstanceId', '')",
													"setValue('ddmDataProviderInstanceOutput', '')",
												],
											},
										],
										editingLanguageId: 'en_US',
										viewMode: false,
										showCancelButton: false,
										showRequiredFieldsWarning: true,
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
																				'Text',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'oPZxjz5Z',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'label',
																		tip: '',
																		placeholder:
																			'Enter a field label.',
																		value:
																			'Text',
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
																			'ddm$$label$oPZxjz5Z$0$$en_US',
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
																				'',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'xs5MvlYI',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'placeholder',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'',
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
																			'ddm$$placeholder$xs5MvlYI$0$$en_US',
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
																				'',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'tve7cQJI',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'tip',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'',
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
																			'ddm$$tip$tve7cQJI$0$$en_US',
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
																			'l5YgnEbP',
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
																			'ddm$$displayStyle$l5YgnEbP$0$$en_US',
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
																			'ZQItSyMD',
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
																			'ddm$$required$ZQItSyMD$0$$en_US',
																		localizable: false,
																	},
																],
															},
														],
													},
												],
												title: 'Basic',
												enabled: true,
												localizedTitle: {
													en_US: 'Basic',
												},
											},
											{
												showRequiredFieldsWarning: true,
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
																			'name',
																		evaluable: true,
																		tooltip:
																			'',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: true,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'DqVWoggB',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'name',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'Text21199104',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Field Name',
																		visibilityExpression:
																			'FALSE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$name$DqVWoggB$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'fieldReference',
																		tooltip:
																			'Field reference serves as a friendly identifier for developers reference a field during a custom development.',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'ULxc0ruc',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'fieldReference',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'Text21199104',
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Field Reference',
																		visibilityExpression:
																			'TRUE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$fieldReference$ULxc0ruc$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'predefinedValue',
																		tooltip:
																			'Enter a default value that is submitted if no other value is entered.',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		localizedValue: {
																			en_US:
																				'',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'deVj3vms',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'predefinedValue',
																		tip: '',
																		placeholder:
																			'Enter a default value.',
																		value:
																			'',
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Predefined Value',
																		visibilityExpression:
																			'TRUE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$predefinedValue$deVj3vms$0$$en_US',
																		localizable: true,
																	},
																	{
																		fieldName:
																			'visibilityExpression',
																		tooltip:
																			'Write a condition expression to control whether this field is displayed.',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'2Nvh4KEr',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'visibilityExpression',
																		tip: '',
																		placeholder:
																			'equals(Country, "US")',
																		value:
																			'',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Field Visibility Expression',
																		visibilityExpression:
																			'FALSE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$visibilityExpression$2Nvh4KEr$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'fieldNamespace',
																		tooltip:
																			'',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'zbSMSRiq',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'fieldNamespace',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'',
																		visibilityExpression:
																			'FALSE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$fieldNamespace$zbSMSRiq$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'indexType',
																		visible: true,
																		dataType:
																			'string',
																		predefinedValue:
																			'keyword',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Searchable',
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
																		visibilityExpression:
																			'TRUE',
																		instanceId:
																			'NDfPRi4P',
																		inline: false,
																		repeatable: false,
																		name:
																			'ddm$$indexType$NDfPRi4P$0$$en_US',
																		options: [
																			{
																				reference:
																					'none',
																				label:
																					'Disable',
																				value:
																					'none',
																			},
																			{
																				reference:
																					'keyword',
																				label:
																					'Keyword',
																				value:
																					'keyword',
																			},
																			{
																				reference:
																					'text',
																				label:
																					'Text',
																				value:
																					'text',
																			},
																		],
																		localizable: false,
																		fieldReference:
																			'indexType',
																		tip: '',
																		value:
																			'keyword',
																	},
																	{
																		fieldName:
																			'localizable',
																		predefinedValue: true,
																		systemSettingsURL:
																			'',
																		showAsSwitcher: false,
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
																			'LEN4L10f',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'localizable',
																		tip: '',
																		value: true,
																		showMaximumRepetitionsInfo: false,
																		visible: false,
																		dataType:
																			'boolean',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Localizable',
																		visibilityExpression:
																			'FALSE',
																		name:
																			'ddm$$localizable$LEN4L10f$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'nativeField',
																		predefinedValue: false,
																		systemSettingsURL:
																			'',
																		showAsSwitcher: false,
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
																			'CxBuoity',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'nativeField',
																		tip: '',
																		value: false,
																		showMaximumRepetitionsInfo: false,
																		visible: false,
																		dataType:
																			'boolean',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'',
																		visibilityExpression:
																			'FALSE',
																		name:
																			'ddm$$nativeField$CxBuoity$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'readOnly',
																		predefinedValue: false,
																		systemSettingsURL:
																			'',
																		showAsSwitcher: false,
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
																			'klR3wks1',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'readOnly',
																		tip: '',
																		value: false,
																		showMaximumRepetitionsInfo: false,
																		visible: false,
																		dataType:
																			'boolean',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Read Only',
																		visibilityExpression:
																			'FALSE',
																		name:
																			'ddm$$readOnly$klR3wks1$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'dataType',
																		evaluable: true,
																		predefinedValue:
																			'string',
																		tooltip:
																			'',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: true,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'YN9DQbgu',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'dataType',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'string',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'',
																		visibilityExpression:
																			'FALSE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$dataType$YN9DQbgu$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'type',
																		evaluable: true,
																		tooltip:
																			'',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: true,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'luGBNq6n',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'type',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'text',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'',
																		visibilityExpression:
																			'FALSE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$type$luGBNq6n$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'showLabel',
																		predefinedValue: true,
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
																			'8jXTXdGB',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'showLabel',
																		tip: '',
																		value: true,
																		showMaximumRepetitionsInfo: false,
																		visible: true,
																		dataType:
																			'boolean',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Show Label',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$showLabel$8jXTXdGB$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'repeatable',
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
																			'CZO71wdY',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'repeatable',
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
																			'Repeatable',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$repeatable$CZO71wdY$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'validation',
																		evaluable: true,
																		visible: true,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Validation',
																		type:
																			'validation',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		visibilityExpression:
																			'TRUE',
																		instanceId:
																			'GLeHxzUO',
																		repeatable: false,
																		name:
																			'ddm$$validation$GLeHxzUO$0$$en_US',
																		options: [],
																		localizable: false,
																		fieldReference:
																			'validation',
																		tip: '',
																		value: {
																			expression: {},
																			parameter: {},
																			errorMessage: {},
																		},
																	},
																	{
																		fieldName:
																			'tooltip',
																		tooltip:
																			'',
																		type:
																			'text',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		localizedValue: {
																			en_US:
																				'',
																		},
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		displayStyle:
																			'singleline',
																		instanceId:
																			'oNyHer9a',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'tooltip',
																		tip: '',
																		placeholder:
																			'',
																		value:
																			'',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'',
																		visibilityExpression:
																			'FALSE',
																		autocompleteEnabled: false,
																		name:
																			'ddm$$tooltip$oNyHer9a$0$$en_US',
																		localizable: true,
																	},
																],
															},
														],
													},
												],
												title: 'Advanced',
												enabled: true,
												localizedTitle: {
													en_US: 'Advanced',
												},
											},
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
																			'autocomplete',
																		evaluable: true,
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
																			'81bhwjBA',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'autocomplete',
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
																			'Autocomplete',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$autocomplete$81bhwjBA$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'dataSourceType',
																		evaluable: true,
																		predefinedValue:
																			'manual',
																		type:
																			'radio',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: false,
																		enabled: true,
																		required: false,
																		valid: true,
																		instanceId:
																			'5jqncl6b',
																		repeatable: false,
																		options: [
																			{
																				reference:
																					'manual',
																				label:
																					'Manually',
																				value:
																					'manual',
																			},
																			{
																				reference:
																					'data-provider',
																				label:
																					'From Data Provider',
																				value:
																					'data-provider',
																			},
																		],
																		fieldReference:
																			'dataSourceType',
																		tip: '',
																		value:
																			'manual',
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		readOnly: false,
																		label:
																			'Create List',
																		visibilityExpression:
																			'TRUE',
																		inline: false,
																		name:
																			'ddm$$dataSourceType$5jqncl6b$0$$en_US',
																		localizable: false,
																	},
																	{
																		fieldName:
																			'ddmDataProviderInstanceId',
																		evaluable: true,
																		predefinedValue: [],
																		type:
																			'select',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		instanceId:
																			'DJWAhZEu',
																		strings: {
																			emptyList:
																				'No results were found.',
																			search:
																				'Search',
																			dynamicallyLoadedData:
																				'Dynamically Loaded Data',
																			chooseOptions:
																				'Choose Options',
																			chooseAnOption:
																				'Choose an Option',
																		},
																		alphabeticalOrder: false,
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'ddmDataProviderInstanceId',
																		tip: '',
																		value: [],
																		visible: false,
																		dataType:
																			'long',
																		errorMessage:
																			'',
																		multiple: false,
																		readOnly: false,
																		label:
																			'Choose a Data Provider',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$ddmDataProviderInstanceId$DJWAhZEu$0$$en_US',
																		localizable: false,
																		dataSourceType:
																			'data-provider',
																	},
																	{
																		fieldName:
																			'ddmDataProviderInstanceOutput',
																		evaluable: true,
																		predefinedValue: [],
																		type:
																			'select',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: true,
																		enabled: true,
																		required: false,
																		valid: true,
																		instanceId:
																			'6kjM3PEN',
																		strings: {
																			emptyList:
																				'No results were found.',
																			search:
																				'Search',
																			dynamicallyLoadedData:
																				'Dynamically Loaded Data',
																			chooseOptions:
																				'Choose Options',
																			chooseAnOption:
																				'Choose an Option',
																		},
																		alphabeticalOrder: false,
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'ddmDataProviderInstanceOutput',
																		tip: '',
																		value: [],
																		visible: false,
																		dataType:
																			'string',
																		errorMessage:
																			'',
																		multiple: false,
																		readOnly: false,
																		label:
																			'Choose an Output Parameter',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$ddmDataProviderInstanceOutput$6kjM3PEN$0$$en_US',
																		localizable: false,
																		dataSourceType:
																			'manual',
																	},
																	{
																		fieldName:
																			'options',
																		evaluable: true,
																		type:
																			'options',
																		dir:
																			'ltr',
																		locale:
																			'en_US',
																		showLabel: false,
																		enabled: true,
																		required: false,
																		valid: true,
																		instanceId:
																			'nvV4hNt0',
																		repeatable: false,
																		options: [],
																		fieldReference:
																			'options',
																		tip: '',
																		value: {
																			en_US: [
																				{
																					reference:
																						'',
																					label:
																						'Option',
																					value:
																						'',
																					edited: true,
																				},
																			],
																		},
																		visible: false,
																		allowEmptyOptions: true,
																		dataType:
																			'ddm-options',
																		errorMessage:
																			'',
																		readOnly: false,
																		defaultLanguageId:
																			'en_US',
																		label:
																			'Options',
																		visibilityExpression:
																			'TRUE',
																		name:
																			'ddm$$options$nvV4hNt0$0$$en_US',
																		localizable: false,
																	},
																],
															},
														],
													},
												],
												title: 'Autocomplete',
												enabled: true,
												localizedTitle: {
													en_US: 'Autocomplete',
												},
											},
										],
										strings: {
											next: 'Next',
											previous: 'Previous',
										},
										showSubmitButton: true,
										paginationMode: 'tabbed',
										containerId: 'settings',
										currentPage: '1',
										defaultSiteLanguageId: 'en_US',
										evaluatorURL:
											'/o/dynamic-data-mapping-form-context-provider/',
										portletNamespace: '',
									},
									dataType: 'string',
									errorMessage: '',
									readOnly: true,
									label: 'Text',
									visibilityExpression: '',
									autocompleteEnabled: false,
									name: 'ddm$$Text21199104$abb3Bq3D$0$$en_US',
									localizable: true,
								},
							],
						},
					],
				},
			],
			title: '',
			enabled: true,
			localizedTitle: {
				en_US: '',
			},
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
		defaultLanguageId: 'en_US',
		name: {
			en_US: 'my custom object',
		},
		contentType: 'app-builder',
		dataDefinitionKey: '40336',
		dateCreated: '2021-01-15T14:23:15Z',
		dateModified: '2021-01-15T14:23:52Z',
		description: {},
		id: 40337,
		siteId: 20125,
		storageType: 'default',
		userId: 20127,
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
		name: {
			en_US: 'My Form View',
		},
		paginationMode: 'single-page',
		dataDefinitionId: 40337,
		dataLayoutKey: '40344',
		dateCreated: '2021-01-15T14:23:52Z',
		dateModified: '2021-01-15T14:23:52Z',
		description: {},
		id: 40343,
		siteId: 20125,
		userId: 20127,
	},
	dataLayoutId: 40343,
	editingDataDefinitionId: 0,
	editingLanguageId: 'en_US',

	initialAvailableLanguageIds: ['en_US'],
	sidebarOpen: true,
	sidebarPanelId: 'fields',
	spritemap: 'http://localhost:8080/o/admin-theme/images/clay/icons.svg',
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
    
    console.log(label)

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
			getStore: jest.fn().mockImplementation(() => getStoreValue),
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
		};
	});

	it('renders', () => {
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
});
