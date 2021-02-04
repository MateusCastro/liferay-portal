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

import {getItem} from 'data-engine-js-components-web/js/utils/client.es';
import {useEffect, useState} from 'react';

import {getLocalizedValue} from '../utils/lang.es';

export default function useDataDefinition(dataDefinitionId) {
	const [dataDefinition, setDataDefinition] = useState({});

	useEffect(() => {
		if (dataDefinitionId) {
			getItem(
				`/o/data-engine/v2.0/data-definitions/${dataDefinitionId}`
			).then((dataDefinition) =>
				setDataDefinition({
					...dataDefinition,
					title: getLocalizedValue(
						dataDefinition.defaultLanguageId,
						dataDefinition.name
					),
				})
			);
		}
	}, [dataDefinitionId]);

	return dataDefinition;
}
