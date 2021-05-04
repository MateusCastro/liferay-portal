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

const chartData = [
	{
		name:
			'[master] ci:test:relevant - hhuijser > hhuijser - PR#5511 - 2021-04-29[07:07:16]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 0,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529500713',
	},
	{
		name:
			'[master] ci:test:relevant - adolfopa > liferay-lima - PR#1781 - 2021-04-29[07:13:47]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 252,
			failed: 1,
			'in-progress': 0,
		},
		testrayBuildId: '1529499866',
	},
	{
		name:
			'[master] ci:test:stable - sandrodw3 > liferay-echo - PR#4376 - 2021-04-29[04:21:36]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 58,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529498073',
	},
	{
		name:
			'[master] ci:test:sf - adolfopa > liferay-lima - PR#1782 - 2021-04-29[09:47:10]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529498051',
	},
	{
		name:
			'[master] ci:test:relevant - kresimir-coko > liferay-data-engine - PR#407 - 2021-04-29[07:06:05]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 491,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529498042',
	},
	{
		name:
			'[master] ci:test:sf - ealonso > liferay-echo - PR#4414 - 2021-04-29[09:44:47]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529497526',
	},
	{
		name:
			'[master] ci:test:relevant - ivicac > liferay-commerce - PR#1069 - 2021-04-29[07:19:56]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 157,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529497517',
	},
	{
		name:
			'[master] ci:test:relevant - sandrodw3 > liferay-echo - PR#4376 - 2021-04-29[04:21:21]',
		metrics: {
			untested: 1,
			blocked: 0,
			'test-fix': 0,
			passed: 1211,
			failed: 3,
			'in-progress': 0,
		},
		testrayBuildId: '1529495413',
	},
	{
		name:
			'[master] ci:test:relevant - p2kmgcl > liferay-echo - PR#4408 - 2021-04-29[04:03:21]',
		metrics: {
			untested: 1,
			blocked: 0,
			'test-fix': 0,
			passed: 1096,
			failed: 3,
			'in-progress': 0,
		},
		testrayBuildId: '1529493749',
	},
	{
		name:
			'[master] ci:test:relevant - gianmarcobrunialti > liferay-commerce - PR#936 - 2021-04-29[03:54:23]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 262,
			failed: 37,
			'in-progress': 0,
		},
		testrayBuildId: '1529493740',
	},
	{
		name:
			'[master] ci:test:sf - LuismiBarcos > liferay-headless - PR#697 - 2021-04-29[09:29:54]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529493702',
	},
	{
		name:
			'[master] ci:test:sf - ealonso > liferay-echo - PR#4409 - 2021-04-29[09:25:25]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529493693',
	},
	{
		name:
			'[master] ci:test:sf - shuyangzhou > shuyangzhou - PR#9996 - 2021-04-29[09:27:06]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529493684',
	},
	{
		name:
			'[master] ci:test:relevant - markocikos > liferay-commerce - PR#1057 - 2021-04-29[04:26:51]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 263,
			failed: 36,
			'in-progress': 0,
		},
		testrayBuildId: '1529491986',
	},
	{
		name:
			'[master] ci:test:sf - MarinhoFeliphe > liferay-workflow - PR#325 - 2021-04-29[09:17:49]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529491629',
	},
	{
		name:
			'[master] ci:test:sf - CarlosBrichete > liferay-tango - PR#1059 - 2021-04-29[09:18:40]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529491620',
	},
	{
		name:
			'[master] ci:test:sf - shuyangzhou > shuyangzhou - PR#9995 - 2021-04-29[09:18:28]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529491602',
	},
	{
		name:
			'[master] ci:test:relevant - LuismiBarcos > liferay-headless - PR#697 - 2021-04-29[07:08:29]',
		metrics: {
			untested: 1,
			blocked: 0,
			'test-fix': 0,
			passed: 209,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529491593',
	},
	{
		name:
			'[master] ci:test:sf - BryanEngler > BryanEngler - PR#576 - 2021-04-29[09:13:17]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 0,
			failed: 1,
			'in-progress': 0,
		},
		testrayBuildId: '1529491548',
	},
	{
		name:
			'[master] ci:test:sf - jonathanmccann > liferay-echo - PR#4413 - 2021-04-29[09:11:20]',
		metrics: {
			untested: 0,
			blocked: 0,
			'test-fix': 0,
			passed: 1,
			failed: 0,
			'in-progress': 0,
		},
		testrayBuildId: '1529491539',
	},
];

const COLUMNS = [
	['untested'],
	['blocked'],
	['test-fix'],
	['passed'],
	['failed'],
	['in-progress'],
];

const CATEGORIES = [];

chartData.forEach((data) => {
	COLUMNS[0].push(data.metrics.untested);
	COLUMNS[1].push(data.metrics.blocked);
	COLUMNS[2].push(data.metrics['test-fix']);
	COLUMNS[3].push(data.metrics.passed);
	COLUMNS[4].push(data.metrics.failed);
	COLUMNS[5].push(data.metrics['in-progress']);

	CATEGORIES.push(data.name);
});

export {CATEGORIES, COLUMNS, chartData};
