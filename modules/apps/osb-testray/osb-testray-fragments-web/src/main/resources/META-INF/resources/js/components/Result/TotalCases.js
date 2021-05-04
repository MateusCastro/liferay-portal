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

import ClayCard from '@clayui/card';
import ClayChart from '@clayui/charts';
import React from 'react';

const TotalCases = ({columns, total}) => {
	const colors = ['#77D787', '#E64F45', '#F8D72E', '#59BBFC', '#969696'];

	return (
		<ClayCard>
			<ClayCard.Body>
				<ClayCard.Description className="mb-4 panel-title">
					Total Test Cases
				</ClayCard.Description>
				<div className="d-flex">
					<div className="chart-donut">
						<ClayChart
							color={{
								pattern: colors,
							}}
							data={{
								columns,
								type: 'donut',
							}}
							donut={
								total && {
									title: total.toString(),
								}
							}
							legend={{
								position: 'right',
								show: true,
							}}
						/>
					</div>
					<div className="chart-bar">
						<ClayChart
							color={{
								pattern: colors,
							}}
							data={{
								columns,
								type: 'bar',
							}}
							legend={{
								position: 'right',
								show: true,
							}}
						/>
					</div>
				</div>
			</ClayCard.Body>
		</ClayCard>
	);
};

export default TotalCases;
