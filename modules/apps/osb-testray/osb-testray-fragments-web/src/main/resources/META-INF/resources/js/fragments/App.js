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

import Build from '../pages/Build';
import ListBuilds from '../pages/ListBuilds';

import '../../css/main.scss';


const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route component={ListBuilds} exact path="/" />
				<Route component={Build} exact path="/:id" />
			</Switch>
		</HashRouter>
	);
};

export default App;
