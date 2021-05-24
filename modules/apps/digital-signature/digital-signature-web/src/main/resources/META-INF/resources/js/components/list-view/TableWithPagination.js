/* eslint-disable no-console */
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

import ClayLayout from '@clayui/layout';
import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
import React from 'react';

import Table from './Table';

const TableWithPagination = ({
	actions,
	columns,
	deltaValues = [4, 8, 20, 40, 60],
	editMode,
	items,
	noActionsMessage,
	totalCount,
	deltas,
}) => {
	return (
		<ClayLayout.ContainerFluid>
			<Table
				actions={actions}
				columns={columns}
				editMode={editMode}
				items={items}
				noActionsMessage={noActionsMessage}
				totalCount={totalCount}
			/>

			{totalCount > deltaValues[0] && (
				<div className="taglib-search-iterator-page-iterator-bottom">
					<ClayPaginationBarWithBasicItems
						activeDelta={1}
						activePage={1}
						deltas={deltas}
						ellipsisBuffer={3}
						onDeltaChange={(pageSize) => console.log(pageSize)}
						onPageChange={(page) => console.log(page)}
						totalItems={totalCount}
					/>
				</div>
			)}
		</ClayLayout.ContainerFluid>
	);
};

export default TableWithPagination;
