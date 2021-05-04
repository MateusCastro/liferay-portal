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
import ClayTable from '@clayui/table';
import React from 'react';

const Tests = ({columns, rows}) => {
	return (
		<ClayCard>
			<ClayCard.Body>
				<p className="mb-4 panel-title">Tests</p>
				<ClayTable>
					<ClayTable.Head>
						<ClayTable.Row>
							{columns.map((column) => (
								<ClayTable.Cell headingCell key={column.name}>
									{column.name}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Head>
					<ClayTable.Body>
						{rows.map((row, index) => (
							<ClayTable.Row key={index}>
								{columns.map((column, index) => {
									const value = row[column.key];

									return (
										<ClayTable.Cell key={index}>
											{column.render
												? column.render(value, row)
												: value || '-'}
										</ClayTable.Cell>
									);
								})}
							</ClayTable.Row>
						))}
					</ClayTable.Body>
				</ClayTable>
			</ClayCard.Body>
		</ClayCard>
	);
};

export default Tests;
