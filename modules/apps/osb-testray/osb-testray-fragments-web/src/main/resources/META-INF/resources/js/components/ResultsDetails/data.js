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

import React from 'react';

import StatusLabel from './StatusLabel';

export const productDetails = [
	{
		indice: 'PRODUCT VERSION',
		value: '1.0.0',
	},
	{
		indice: 'DESCRIPTION',
		value:
			'Portal Branch: master; Portal SHA: 85ec7d6f11c7386d5e056534420ce7993f095cdf;',
	},
	{
		indice: 'GIT HASH',
		value: '85ec7d6f11c7386d5e056534420ce7993f095cdf',
	},
	{
		indice: 'CREATE DATE',
		value: 'abr 28, 2021 1:13 PM',
	},
	{
		indice: 'CREATED BY',
		value: 'Alfred Thaddeus Crane Pennyworth',
	},
	{
		indice: 'ALL ISSUES FOUND',
		value: '-',
	},
];

export const columns = [
	{
		key: 'priority',
		name: 'PRIORITY',
	},
	{
		key: 'component',
		name: 'COMPONENT',
	},
	{
		key: 'case',
		name: 'CASE',
	},
	{
		key: 'run',
		name: 'RUN',
	},
	{
		key: 'assignee',
		name: 'ASSIGNEE',
	},
	{
		key: 'status',
		name: 'STATUS',
		render: (value) => <StatusLabel label={value} />,
	},
	{
		key: 'issues',
		name: 'ISSUES',
	},
	{
		key: 'errors',
		name: 'ERRORS',
	},
];

export const rows = [
	{
		assignee: 'Maria',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Batch',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 5,
		run: '01',
		status: 'failed',
	},
	{
		assignee: 'João',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '-',
		issues: '-',
		priority: 4,
		run: '01',
		status: 'passed',
	},
	{
		assignee: 'João',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Batch',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '01',
		status: 'failed',
	},
	{
		assignee: 'Fernando',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '01',
		status: 'text fix',
	},
	{
		assignee: 'Fernando',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '-',
		issues: '-',
		priority: 2,
		run: '01',
		status: 'passed',
	},
	{
		assignee: 'Ricardo',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Batch',
		errors: '-',
		issues: '-',
		priority: 4,
		run: '01',
		status: 'passed',
	},
	{
		assignee: 'João',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '02',
		status: 'failed',
	},
	{
		assignee: 'Ricardo',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Batch',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '01',
		status: 'blocked',
	},
	{
		assignee: 'João',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '02',
		status: 'failed',
	},
	{
		assignee: 'Fernando',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '01',
		status: 'text fix',
	},
	{
		assignee: 'João',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '-',
		issues: '-',
		priority: 2,
		run: '04',
		status: 'text fix',
	},
	{
		assignee: 'Fernando',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '03',
		status: 'failed',
	},
	{
		assignee: 'Fernando',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Batch',
		errors: '-',
		issues: '-',
		priority: 2,
		run: '03',
		status: 'incomplete',
	},
	{
		assignee: 'Carlos',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 3,
		run: '01',
		status: 'text fix',
	},
	{
		assignee: 'Carlos',
		case: 'source-format-current-branch-jdk8/0/0',
		component: 'Example',
		errors: '[java] java.lang.Exception: Found 1 formatting issues:',
		issues: '-',
		priority: 2,
		run: '02',
		status: 'failed',
	},
];

export const chartData = [
	{
		name: 'PASSED',
		total: 3,
	},
	{
		name: 'FAILED',
		total: 6,
	},
	{
		name: 'BLOCKED',
		total: 1,
	},
	{
		name: 'TEXT FIX',
		total: 4,
	},
	{
		name: 'INCOMPLETE',
		total: 1,
	},
];
