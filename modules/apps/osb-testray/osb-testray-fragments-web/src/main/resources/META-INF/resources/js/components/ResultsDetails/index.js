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

import Details from './Details';
import Tests from './Tests';
import TotalCases from './TotalCases';
import {chartData, columns, productDetails, rows} from './data';

const ResultsDetails = () => {
	const COLUMNS = chartData.map((data) => [
		`${data.name} (${data.total})`,
		data.total,
	]);
	const total = COLUMNS.reduce((acc, column) => acc + column[1], 0);

	return (
		<div className="results-details">
			<Details product={productDetails} />
			<TotalCases columns={COLUMNS} total={total} />
			<Tests columns={columns} rows={rows} />
		</div>
	);
};

export default ResultsDetails;
