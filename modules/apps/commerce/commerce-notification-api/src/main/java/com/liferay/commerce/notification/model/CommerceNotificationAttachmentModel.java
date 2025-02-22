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

package com.liferay.commerce.notification.model;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.GroupedModel;
import com.liferay.portal.kernel.model.ShardedModel;
import com.liferay.portal.kernel.model.StagedAuditedModel;

import java.util.Date;

import org.osgi.annotation.versioning.ProviderType;

/**
 * The base model interface for the CommerceNotificationAttachment service. Represents a row in the &quot;CNotificationAttachment&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation <code>com.liferay.commerce.notification.model.impl.CommerceNotificationAttachmentModelImpl</code> exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in <code>com.liferay.commerce.notification.model.impl.CommerceNotificationAttachmentImpl</code>.
 * </p>
 *
 * @author Alessio Antonio Rendina
 * @see CommerceNotificationAttachment
 * @generated
 */
@ProviderType
public interface CommerceNotificationAttachmentModel
	extends BaseModel<CommerceNotificationAttachment>, GroupedModel,
			ShardedModel, StagedAuditedModel {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a commerce notification attachment model instance should use the {@link CommerceNotificationAttachment} interface instead.
	 */

	/**
	 * Returns the primary key of this commerce notification attachment.
	 *
	 * @return the primary key of this commerce notification attachment
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this commerce notification attachment.
	 *
	 * @param primaryKey the primary key of this commerce notification attachment
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the uuid of this commerce notification attachment.
	 *
	 * @return the uuid of this commerce notification attachment
	 */
	@AutoEscape
	@Override
	public String getUuid();

	/**
	 * Sets the uuid of this commerce notification attachment.
	 *
	 * @param uuid the uuid of this commerce notification attachment
	 */
	@Override
	public void setUuid(String uuid);

	/**
	 * Returns the commerce notification attachment ID of this commerce notification attachment.
	 *
	 * @return the commerce notification attachment ID of this commerce notification attachment
	 */
	public long getCommerceNotificationAttachmentId();

	/**
	 * Sets the commerce notification attachment ID of this commerce notification attachment.
	 *
	 * @param commerceNotificationAttachmentId the commerce notification attachment ID of this commerce notification attachment
	 */
	public void setCommerceNotificationAttachmentId(
		long commerceNotificationAttachmentId);

	/**
	 * Returns the group ID of this commerce notification attachment.
	 *
	 * @return the group ID of this commerce notification attachment
	 */
	@Override
	public long getGroupId();

	/**
	 * Sets the group ID of this commerce notification attachment.
	 *
	 * @param groupId the group ID of this commerce notification attachment
	 */
	@Override
	public void setGroupId(long groupId);

	/**
	 * Returns the company ID of this commerce notification attachment.
	 *
	 * @return the company ID of this commerce notification attachment
	 */
	@Override
	public long getCompanyId();

	/**
	 * Sets the company ID of this commerce notification attachment.
	 *
	 * @param companyId the company ID of this commerce notification attachment
	 */
	@Override
	public void setCompanyId(long companyId);

	/**
	 * Returns the user ID of this commerce notification attachment.
	 *
	 * @return the user ID of this commerce notification attachment
	 */
	@Override
	public long getUserId();

	/**
	 * Sets the user ID of this commerce notification attachment.
	 *
	 * @param userId the user ID of this commerce notification attachment
	 */
	@Override
	public void setUserId(long userId);

	/**
	 * Returns the user uuid of this commerce notification attachment.
	 *
	 * @return the user uuid of this commerce notification attachment
	 */
	@Override
	public String getUserUuid();

	/**
	 * Sets the user uuid of this commerce notification attachment.
	 *
	 * @param userUuid the user uuid of this commerce notification attachment
	 */
	@Override
	public void setUserUuid(String userUuid);

	/**
	 * Returns the user name of this commerce notification attachment.
	 *
	 * @return the user name of this commerce notification attachment
	 */
	@AutoEscape
	@Override
	public String getUserName();

	/**
	 * Sets the user name of this commerce notification attachment.
	 *
	 * @param userName the user name of this commerce notification attachment
	 */
	@Override
	public void setUserName(String userName);

	/**
	 * Returns the create date of this commerce notification attachment.
	 *
	 * @return the create date of this commerce notification attachment
	 */
	@Override
	public Date getCreateDate();

	/**
	 * Sets the create date of this commerce notification attachment.
	 *
	 * @param createDate the create date of this commerce notification attachment
	 */
	@Override
	public void setCreateDate(Date createDate);

	/**
	 * Returns the modified date of this commerce notification attachment.
	 *
	 * @return the modified date of this commerce notification attachment
	 */
	@Override
	public Date getModifiedDate();

	/**
	 * Sets the modified date of this commerce notification attachment.
	 *
	 * @param modifiedDate the modified date of this commerce notification attachment
	 */
	@Override
	public void setModifiedDate(Date modifiedDate);

	/**
	 * Returns the commerce notification queue entry ID of this commerce notification attachment.
	 *
	 * @return the commerce notification queue entry ID of this commerce notification attachment
	 */
	public long getCommerceNotificationQueueEntryId();

	/**
	 * Sets the commerce notification queue entry ID of this commerce notification attachment.
	 *
	 * @param commerceNotificationQueueEntryId the commerce notification queue entry ID of this commerce notification attachment
	 */
	public void setCommerceNotificationQueueEntryId(
		long commerceNotificationQueueEntryId);

	/**
	 * Returns the file entry ID of this commerce notification attachment.
	 *
	 * @return the file entry ID of this commerce notification attachment
	 */
	public long getFileEntryId();

	/**
	 * Sets the file entry ID of this commerce notification attachment.
	 *
	 * @param fileEntryId the file entry ID of this commerce notification attachment
	 */
	public void setFileEntryId(long fileEntryId);

	/**
	 * Returns the delete on send of this commerce notification attachment.
	 *
	 * @return the delete on send of this commerce notification attachment
	 */
	public boolean getDeleteOnSend();

	/**
	 * Returns <code>true</code> if this commerce notification attachment is delete on send.
	 *
	 * @return <code>true</code> if this commerce notification attachment is delete on send; <code>false</code> otherwise
	 */
	public boolean isDeleteOnSend();

	/**
	 * Sets whether this commerce notification attachment is delete on send.
	 *
	 * @param deleteOnSend the delete on send of this commerce notification attachment
	 */
	public void setDeleteOnSend(boolean deleteOnSend);

	@Override
	public CommerceNotificationAttachment cloneWithOriginalValues();

}