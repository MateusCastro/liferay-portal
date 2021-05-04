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

import ClayTable from '@clayui/table';
import React from 'react';

const TableComponent = ({borderless, className, columns = [], items = []}) => {
	return (
		<ClayTable borderless={borderless} className={className}>
			<ClayTable.Head>
				<ClayTable.Row>
					{columns.map((column, index) => (
						<ClayTable.Cell
							expanded={index === 0}
							headingCell
							key={index}
						>
							{column.value}
						</ClayTable.Cell>
					))}
				</ClayTable.Row>
			</ClayTable.Head>
			<ClayTable.Body>
				{items.map((item, index) => (
					<ClayTable.Row key={index}>
						{columns.map((column, indexC) => {
							const value = item[column.key];

							return (
								<ClayTable.Cell
									headingTitle={indexC === 0}
									key={indexC}
								>
									{column.render
										? column.render(value, item)
										: value || '-'}
								</ClayTable.Cell>
							);
						})}
					</ClayTable.Row>
				))}
			</ClayTable.Body>
		</ClayTable>
	);
};

export default TableComponent;
