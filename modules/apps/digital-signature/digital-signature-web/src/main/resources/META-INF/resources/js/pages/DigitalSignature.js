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
import {HashRouter, Route, Switch} from 'react-router-dom';

import EnvelopeForm from './envelope/EnvelopeForm';
import EnvelopeList from './envelope/EnvelopeList';
import EnvelopeView from './envelope/EnvelopeView';

const DigitalSignature = ({baseResourceURL, portletNamespace}) => (
	<HashRouter>
		<Switch>
			<Route component={EnvelopeView} exact path="/envelope/:id" />
			<Route
				component={(props) => (
					<EnvelopeList
						{...props}
						baseResourceURL={baseResourceURL}
					/>
				)}
				exact
				path="/"
			/>
			<Route
				component={(props) => (
					<EnvelopeForm
						{...props}
						baseResourceURL={baseResourceURL}
						portletNamespace={portletNamespace}
					/>
				)}
				exact
				path="/new-envelope"
			/>
		</Switch>
	</HashRouter>
);

export default DigitalSignature;
