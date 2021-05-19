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
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import React, {useState} from 'react';

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

const items = [
	{
		created: '11 minutes ago',
		emailSubject: 'Lease Agreement',
		name: 'Envelope Name 1',
		recipients: ['sara6@gmail.com', 'asdf@gmail'],
		sender: 'ashleyg@yahoo.com',
		status: 'SIGNED',
	},
	{
		created: '19 minutes ago',
		emailSubject: 'Please Sign',
		name: 'Envelope Name 2',
		recipients: ['maryn@gmail.com'],
		sender: 'joshp@gmail.com',
		status: 'COMPLETE',
	},
	{
		created: '7 Hours ago',
		emailSubject: 'HR Compliance',
		name: 'Envelope Name 3',
		recipients: ['tabithal@hotmail.com'],
		sender: 'aaronm@gmail.com',
		status: 'VOID',
	},
	{
		created: '1 Day ago',
		emailSubject: 'DocuSing',
		name: 'Envelope Name 4',
		recipients: ['garyl@gmail.com'],
		sender: 'maxt@outlook.com',
		status: 'SIGNED',
	},
	{
		created: '7 Days ago',
		emailSubject: 'Sign Document',
		name: 'Envelope Name 5',
		recipients: ['sheilat@outlook.com'],
		sender: 'maxt@outlook.com',
		status: 'SIGNED',
	},
];

const DigitalSignatureRequest = ({history}) => {
	const [active, setActive] = useState(false);

	const dropDownItens = [
		{
			label: Liferay.Language.get('digital-signature-envelope'),
			onClick: () => history.push('/new-envelope'),
			symbol: 'box-container',
		},
		{
			label: Liferay.Language.get('folder'),
			onClick: () => history.push('/new-folder'),
			symbol: 'folder',
		},
	];

	const addButton = () => (
		<ClayDropDown
			active={active}
			onActiveChange={setActive}
			trigger={
				<ClayButtonWithIcon
					className="nav-btn nav-btn-monospaced"
					symbol="plus"
				/>
			}
		>
			<ClayDropDown.ItemList>
				{dropDownItens.map((item, i) => (
					<ClayDropDown.Item key={i} onClick={item.onClick}>
						<ClayIcon className="mr-2" symbol={item.symbol} />
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);

	return (
		<ListView
			actions={[
				{
					action: (item) => item,
					name: Liferay.Language.get('edit'),
				},
			]}
			addButton={addButton}
			columns={COLUMNS}
			items={items}
			totalCount={10}
		/>
	);
};

export default DigitalSignatureRequest;
