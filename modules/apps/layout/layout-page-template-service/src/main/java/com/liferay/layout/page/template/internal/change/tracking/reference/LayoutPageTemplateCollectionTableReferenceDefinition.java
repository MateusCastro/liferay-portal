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

package com.liferay.layout.page.template.internal.change.tracking.reference;

import com.liferay.change.tracking.reference.TableReferenceDefinition;
import com.liferay.change.tracking.reference.builder.TableReferenceInfoBuilder;
import com.liferay.layout.page.template.model.LayoutPageTemplateCollection;
import com.liferay.layout.page.template.model.LayoutPageTemplateCollectionTable;
import com.liferay.layout.page.template.service.persistence.LayoutPageTemplateCollectionPersistence;
import com.liferay.portal.kernel.service.persistence.BasePersistence;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Preston Crary
 */
@Component(service = TableReferenceDefinition.class)
public class LayoutPageTemplateCollectionTableReferenceDefinition
	implements TableReferenceDefinition<LayoutPageTemplateCollectionTable> {

	@Override
	public void defineTableReferences(
		TableReferenceInfoBuilder<LayoutPageTemplateCollectionTable>
			tableReferenceInfoBuilder) {

		tableReferenceInfoBuilder.groupedModel(
			LayoutPageTemplateCollectionTable.INSTANCE
		).nonreferenceColumns(
			LayoutPageTemplateCollectionTable.INSTANCE.uuid,
			LayoutPageTemplateCollectionTable.INSTANCE.
				layoutPageTemplateCollectionKey,
			LayoutPageTemplateCollectionTable.INSTANCE.name,
			LayoutPageTemplateCollectionTable.INSTANCE.description,
			LayoutPageTemplateCollectionTable.INSTANCE.lastPublishDate
		).resourcePermissionReference(
			LayoutPageTemplateCollectionTable.INSTANCE.
				layoutPageTemplateCollectionId,
			LayoutPageTemplateCollection.class
		);
	}

	@Override
	public BasePersistence<?> getBasePersistence() {
		return _layoutPageTemplateCollectionPersistence;
	}

	@Override
	public LayoutPageTemplateCollectionTable getTable() {
		return LayoutPageTemplateCollectionTable.INSTANCE;
	}

	@Reference
	private LayoutPageTemplateCollectionPersistence
		_layoutPageTemplateCollectionPersistence;

}