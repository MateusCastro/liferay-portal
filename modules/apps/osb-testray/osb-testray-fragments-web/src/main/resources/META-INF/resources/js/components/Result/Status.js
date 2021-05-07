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

const StatusLabel = ({label}) => {
	// const colors = ['#77D787', '#E64F45', '#F8D72E', '#59BBFC', '#969696'];

	const getColor = (label) => {
		switch (label) {
			case 'passed':
				return 'passed';
			case 'failed':
				return 'failed';
			case 'blocked':
				return 'blocked';
			case 'text fix':
				return 'fix';
			default:
				return 'defaultstatus';
		}
	};

	return <span className={'statuslabel ' + getColor(label)}>{label}</span>;
};

export default StatusLabel;
