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

package com.liferay.portal.tools.service.builder.test.model.impl;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.tools.service.builder.test.model.LVEntry;
import com.liferay.portal.tools.service.builder.test.service.LVEntryLocalServiceUtil;

/**
 * The extended model base implementation for the LVEntry service. Represents a row in the &quot;LVEntry&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This class exists only as a container for the default extended model level methods generated by ServiceBuilder. Helper methods and all application logic should be put in {@link LVEntryImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see LVEntryImpl
 * @see LVEntry
 * @generated
 */
public abstract class LVEntryBaseImpl
	extends LVEntryModelImpl implements LVEntry {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a lv entry model instance should use the <code>LVEntry</code> interface instead.
	 */
	@Override
	public void persist() {
		if (this.isNew()) {
			LVEntryLocalServiceUtil.addLVEntry(this);
		}
		else {
			try {
				LVEntryLocalServiceUtil.updateLVEntry(this);
			}
			catch (PortalException pe) {
				throw new SystemException(pe);
			}
		}
	}

}