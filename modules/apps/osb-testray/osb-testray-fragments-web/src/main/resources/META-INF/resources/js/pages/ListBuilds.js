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

import ClayProgressBar from '@clayui/progress-bar';
import React from 'react';
import {createPortal} from 'react-dom';
import {Link} from 'react-router-dom';

import LineChart from '../components/Chart/LineChart';
import {chartData} from '../components/Chart/data';
import Table from '../components/Table/Table';

const MyElement = () => <div>Teste</div>;

function createUUID() {
	let dt = new Date().getTime();

	const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
		/[xy]/g,
		(c) => {
			const r = (dt + Math.random() * 16) % 16 | 0;
			dt = Math.floor(dt / 16);

			return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
		}
	);

	return uuid;
}

const columns = [
	{
		key: 'build',
		render: (build) => <Link to="/1">{build}</Link>,
		value: 'Build',
	},
	{
		key: 'git_hash',
		value: 'Git Hash',
	},
	{
		key: 'product_version',
		value: 'Product Version',
	},
	{
		key: 'failed',
		value: 'Failed',
	},
	{
		key: 'blocked',
		value: 'Blocked',
	},
	{
		key: 'test_fix',
		value: 'Test Fix',
	},
	{
		key: 'metrics',
		render: () => {
			const value = Math.floor(Math.random() * 100) + 1;

			return <ClayProgressBar value={value} warn={value < 51} />;
		},
		value: 'Metrics',
	},
];

const data = chartData.map((chart) => ({
	blocked: chart.metrics.blocked,
	build: chart.name,
	failed: chart.metrics.failed,
	git_hash: createUUID().split('-').pop(),
	product_version: '7.4.x',
	text_fix: chart.metrics['text_fix'],
}));

const myPortal = document.getElementById('put-the-fragment-here');

const ListBuilds = () => {
	return (
		<div className="m-5">
			<h1>Build History</h1>

			{myPortal && createPortal(<MyElement />, myPortal)}

			<LineChart />

			<hr />

			<Table columns={columns} items={data} />
		</div>
	);
};

export default ListBuilds;
