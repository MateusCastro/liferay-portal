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

import ClayBadge from '@clayui/badge';
import {ClayButtonWithIcon} from '@clayui/button';
import ClayLabel from '@clayui/label';
import {createResourceURL, fetch, openToast} from 'frontend-js-web';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import ListView from '../../components/list-view/ListView';

const StatusLabel = ({label}) => {
	const getDisplayType = () => {
		switch (label) {
			case 'COMPLETE':
				return 'success';
			case 'VOID':
				return 'warning';
			default:
				return 'info';
		}
	};

	return <ClayLabel displayType={getDisplayType()}>{label}</ClayLabel>;
};

const COLUMNS = [
	{
		key: 'name',
		render: (value) => <Link to="/envelope/39970">{value}</Link>,
		sortable: true,
		value: Liferay.Language.get('name'),
	},
	{
		key: 'emailSubject',
		sortable: true,
		value: Liferay.Language.get('email-subject'),
	},
	{
		key: 'sender',
		sortable: true,
		value: Liferay.Language.get('sender'),
	},
	{
		key: 'recipients',
		render: (recipients) => (
			<span className="d-flex">
				{recipients[0]}
				{recipients.length > 1 && (
					<ClayBadge
						className="ml-1"
						displayType="primary"
						label={`+${recipients.length - 1}`}
					/>
				)}
			</span>
		),
		sortable: true,
		value: Liferay.Language.get('recipients'),
	},
	{
		key: 'status',
		render: (status) => <StatusLabel label={status} />,
		sortable: true,
		value: Liferay.Language.get('status'),
	},
	{
		key: 'created',
		sortable: true,
		value: Liferay.Language.get('create-date'),
	},
];

const EnvelopeList = ({baseResourceURL, history}) => {
	const [envelopes, setEnvelopes] = useState([
		{
			created: '11 minutes ago',
			emailSubject: 'Lease Agreement',
			name: 'Envelope Name 1',
			recipients: ['sara6@gmail.com', 'asdf@gmail'],
			sender: 'ashleyg@yahoo.com',
			status: 'SIGNED',
		},
	]);

	const getEnvelopes = async () => {
		// eslint-disable-next-line no-constant-condition
		if (true) {
			return;
		}

		try {
			const response = await fetch(
				createResourceURL(baseResourceURL, {
					p_p_resource_id: '/digital_signature/get_ds_envelopes',
				})
			);

			setEnvelopes(response.items);
		} catch (e) {
			openToast({
				message: Liferay.Language.get('an-unexpected-error-occurred'),
				title: Liferay.Language.get('error'),
				type: 'danger',
			});
		}
	};

	useEffect(() => {
		getEnvelopes();
	}, []);

	return (
		<ListView
			actions={[]}
			addButton={() => (
				<ClayButtonWithIcon
					className="nav-btn nav-btn-monospaced"
					onClick={() => history.push('/new-envelope')}
					symbol="plus"
				/>
			)}
			columns={COLUMNS}
			items={envelopes}
			totalCount={envelopes.length}
		/>
	);
};

export default EnvelopeList;
