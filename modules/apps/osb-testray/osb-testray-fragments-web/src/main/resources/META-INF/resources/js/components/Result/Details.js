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

import ClayPanel from '@clayui/panel';
import React from 'react';

const Details = ({product}) => {
	return (
		<ClayPanel
			collapsable
			defaultExpanded
			displayTitle="Details"
			displayType="secondary"
			showCollapseIcon
		>
			<ClayPanel.Body>
				<div className="results-details__info">
					{product.map((detail) => (
						<p key={detail.indice}>
							<span className="results-details__info__indice">
								{detail.indice}
							</span>
							<span>{detail.value}</span>
						</p>
					))}
				</div>
				<div className="results-details__legend">
					<div className="results-details__legend__container">
						<p className="title">0 minutes</p>
						<p className="subtitle">TOTAL ESTIMATED TIME</p>
					</div>
					<div className="results-details__legend__container">
						<p className="title">0 minutes</p>
						<p className="subtitle">REMAINING ESTIMATED TIME</p>
					</div>
					<div className="results-details__legend__container">
						<p className="title">0</p>
						<p className="subtitle">TOTAL ISSUES</p>
					</div>
				</div>
			</ClayPanel.Body>
		</ClayPanel>
	);
};

export default Details;
