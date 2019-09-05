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

package com.liferay.mail.reader.model.impl;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;
import com.liferay.mail.reader.model.Folder;
import com.liferay.mail.reader.model.FolderModel;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.ModelWrapper;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.service.UserLocalServiceUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ProxyUtil;

import java.io.Serializable;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationHandler;

import java.sql.Types;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

/**
 * The base model implementation for the Folder service. Represents a row in the &quot;Mail_Folder&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface </code>FolderModel</code> exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link FolderImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see FolderImpl
 * @generated
 */
public class FolderModelImpl
	extends BaseModelImpl<Folder> implements FolderModel {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a folder model instance should use the <code>Folder</code> interface instead.
	 */
	public static final String TABLE_NAME = "Mail_Folder";

	public static final Object[][] TABLE_COLUMNS = {
		{"folderId", Types.BIGINT}, {"companyId", Types.BIGINT},
		{"userId", Types.BIGINT}, {"userName", Types.VARCHAR},
		{"createDate", Types.TIMESTAMP}, {"modifiedDate", Types.TIMESTAMP},
		{"accountId", Types.BIGINT}, {"fullName", Types.VARCHAR},
		{"displayName", Types.VARCHAR}, {"remoteMessageCount", Types.INTEGER}
	};

	public static final Map<String, Integer> TABLE_COLUMNS_MAP =
		new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("folderId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("companyId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("createDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("modifiedDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("accountId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("fullName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("displayName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("remoteMessageCount", Types.INTEGER);
	}

	public static final String TABLE_SQL_CREATE =
		"create table Mail_Folder (folderId LONG not null primary key,companyId LONG,userId LONG,userName VARCHAR(75) null,createDate DATE null,modifiedDate DATE null,accountId LONG,fullName VARCHAR(75) null,displayName VARCHAR(75) null,remoteMessageCount INTEGER)";

	public static final String TABLE_SQL_DROP = "drop table Mail_Folder";

	public static final String ORDER_BY_JPQL = " ORDER BY folder.fullName ASC";

	public static final String ORDER_BY_SQL =
		" ORDER BY Mail_Folder.fullName ASC";

	public static final String DATA_SOURCE = "liferayDataSource";

	public static final String SESSION_FACTORY = "liferaySessionFactory";

	public static final String TX_MANAGER = "liferayTransactionManager";

	public static final long ACCOUNTID_COLUMN_BITMASK = 1L;

	public static final long FULLNAME_COLUMN_BITMASK = 2L;

	public static void setEntityCacheEnabled(boolean entityCacheEnabled) {
		_entityCacheEnabled = entityCacheEnabled;
	}

	public static void setFinderCacheEnabled(boolean finderCacheEnabled) {
		_finderCacheEnabled = finderCacheEnabled;
	}

	public FolderModelImpl() {
	}

	@Override
	public long getPrimaryKey() {
		return _folderId;
	}

	@Override
	public void setPrimaryKey(long primaryKey) {
		setFolderId(primaryKey);
	}

	@Override
	public Serializable getPrimaryKeyObj() {
		return _folderId;
	}

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj) {
		setPrimaryKey(((Long)primaryKeyObj).longValue());
	}

	@Override
	public Class<?> getModelClass() {
		return Folder.class;
	}

	@Override
	public String getModelClassName() {
		return Folder.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		Map<String, Function<Folder, Object>> attributeGetterFunctions =
			getAttributeGetterFunctions();

		for (Map.Entry<String, Function<Folder, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<Folder, Object> attributeGetterFunction = entry.getValue();

			attributes.put(
				attributeName, attributeGetterFunction.apply((Folder)this));
		}

		attributes.put("entityCacheEnabled", isEntityCacheEnabled());
		attributes.put("finderCacheEnabled", isFinderCacheEnabled());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Map<String, BiConsumer<Folder, Object>> attributeSetterBiConsumers =
			getAttributeSetterBiConsumers();

		for (Map.Entry<String, Object> entry : attributes.entrySet()) {
			String attributeName = entry.getKey();

			BiConsumer<Folder, Object> attributeSetterBiConsumer =
				attributeSetterBiConsumers.get(attributeName);

			if (attributeSetterBiConsumer != null) {
				attributeSetterBiConsumer.accept(
					(Folder)this, entry.getValue());
			}
		}
	}

	public Map<String, Function<Folder, Object>> getAttributeGetterFunctions() {
		return _attributeGetterFunctions;
	}

	public Map<String, BiConsumer<Folder, Object>>
		getAttributeSetterBiConsumers() {

		return _attributeSetterBiConsumers;
	}

	private static Function<InvocationHandler, Folder>
		_getProxyProviderFunction() {

		Class<?> proxyClass = ProxyUtil.getProxyClass(
			Folder.class.getClassLoader(), Folder.class, ModelWrapper.class);

		try {
			Constructor<Folder> constructor =
				(Constructor<Folder>)proxyClass.getConstructor(
					InvocationHandler.class);

			return invocationHandler -> {
				try {
					return constructor.newInstance(invocationHandler);
				}
				catch (ReflectiveOperationException roe) {
					throw new InternalError(roe);
				}
			};
		}
		catch (NoSuchMethodException nsme) {
			throw new InternalError(nsme);
		}
	}

	private static final Map<String, Function<Folder, Object>>
		_attributeGetterFunctions;
	private static final Map<String, BiConsumer<Folder, Object>>
		_attributeSetterBiConsumers;

	static {
		Map<String, Function<Folder, Object>> attributeGetterFunctions =
			new LinkedHashMap<String, Function<Folder, Object>>();
		Map<String, BiConsumer<Folder, ?>> attributeSetterBiConsumers =
			new LinkedHashMap<String, BiConsumer<Folder, ?>>();

		attributeGetterFunctions.put("folderId", Folder::getFolderId);
		attributeSetterBiConsumers.put(
			"folderId", (BiConsumer<Folder, Long>)Folder::setFolderId);
		attributeGetterFunctions.put("companyId", Folder::getCompanyId);
		attributeSetterBiConsumers.put(
			"companyId", (BiConsumer<Folder, Long>)Folder::setCompanyId);
		attributeGetterFunctions.put("userId", Folder::getUserId);
		attributeSetterBiConsumers.put(
			"userId", (BiConsumer<Folder, Long>)Folder::setUserId);
		attributeGetterFunctions.put("userName", Folder::getUserName);
		attributeSetterBiConsumers.put(
			"userName", (BiConsumer<Folder, String>)Folder::setUserName);
		attributeGetterFunctions.put("createDate", Folder::getCreateDate);
		attributeSetterBiConsumers.put(
			"createDate", (BiConsumer<Folder, Date>)Folder::setCreateDate);
		attributeGetterFunctions.put("modifiedDate", Folder::getModifiedDate);
		attributeSetterBiConsumers.put(
			"modifiedDate", (BiConsumer<Folder, Date>)Folder::setModifiedDate);
		attributeGetterFunctions.put("accountId", Folder::getAccountId);
		attributeSetterBiConsumers.put(
			"accountId", (BiConsumer<Folder, Long>)Folder::setAccountId);
		attributeGetterFunctions.put("fullName", Folder::getFullName);
		attributeSetterBiConsumers.put(
			"fullName", (BiConsumer<Folder, String>)Folder::setFullName);
		attributeGetterFunctions.put("displayName", Folder::getDisplayName);
		attributeSetterBiConsumers.put(
			"displayName", (BiConsumer<Folder, String>)Folder::setDisplayName);
		attributeGetterFunctions.put(
			"remoteMessageCount", Folder::getRemoteMessageCount);
		attributeSetterBiConsumers.put(
			"remoteMessageCount",
			(BiConsumer<Folder, Integer>)Folder::setRemoteMessageCount);

		_attributeGetterFunctions = Collections.unmodifiableMap(
			attributeGetterFunctions);
		_attributeSetterBiConsumers = Collections.unmodifiableMap(
			(Map)attributeSetterBiConsumers);
	}

	@Override
	public long getFolderId() {
		return _folderId;
	}

	@Override
	public void setFolderId(long folderId) {
		_folderId = folderId;
	}

	@Override
	public long getCompanyId() {
		return _companyId;
	}

	@Override
	public void setCompanyId(long companyId) {
		_companyId = companyId;
	}

	@Override
	public long getUserId() {
		return _userId;
	}

	@Override
	public void setUserId(long userId) {
		_userId = userId;
	}

	@Override
	public String getUserUuid() {
		try {
			User user = UserLocalServiceUtil.getUserById(getUserId());

			return user.getUuid();
		}
		catch (PortalException pe) {
			return "";
		}
	}

	@Override
	public void setUserUuid(String userUuid) {
	}

	@Override
	public String getUserName() {
		if (_userName == null) {
			return "";
		}
		else {
			return _userName;
		}
	}

	@Override
	public void setUserName(String userName) {
		_userName = userName;
	}

	@Override
	public Date getCreateDate() {
		return _createDate;
	}

	@Override
	public void setCreateDate(Date createDate) {
		_createDate = createDate;
	}

	@Override
	public Date getModifiedDate() {
		return _modifiedDate;
	}

	public boolean hasSetModifiedDate() {
		return _setModifiedDate;
	}

	@Override
	public void setModifiedDate(Date modifiedDate) {
		_setModifiedDate = true;

		_modifiedDate = modifiedDate;
	}

	@Override
	public long getAccountId() {
		return _accountId;
	}

	@Override
	public void setAccountId(long accountId) {
		_columnBitmask |= ACCOUNTID_COLUMN_BITMASK;

		if (!_setOriginalAccountId) {
			_setOriginalAccountId = true;

			_originalAccountId = _accountId;
		}

		_accountId = accountId;
	}

	public long getOriginalAccountId() {
		return _originalAccountId;
	}

	@Override
	public String getFullName() {
		if (_fullName == null) {
			return "";
		}
		else {
			return _fullName;
		}
	}

	@Override
	public void setFullName(String fullName) {
		_columnBitmask = -1L;

		if (_originalFullName == null) {
			_originalFullName = _fullName;
		}

		_fullName = fullName;
	}

	public String getOriginalFullName() {
		return GetterUtil.getString(_originalFullName);
	}

	@Override
	public String getDisplayName() {
		if (_displayName == null) {
			return "";
		}
		else {
			return _displayName;
		}
	}

	@Override
	public void setDisplayName(String displayName) {
		_displayName = displayName;
	}

	@Override
	public int getRemoteMessageCount() {
		return _remoteMessageCount;
	}

	@Override
	public void setRemoteMessageCount(int remoteMessageCount) {
		_remoteMessageCount = remoteMessageCount;
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(
			getCompanyId(), Folder.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public Folder toEscapedModel() {
		if (_escapedModel == null) {
			Function<InvocationHandler, Folder>
				escapedModelProxyProviderFunction =
					EscapedModelProxyProviderFunctionHolder.
						_escapedModelProxyProviderFunction;

			_escapedModel = escapedModelProxyProviderFunction.apply(
				new AutoEscapeBeanHandler(this));
		}

		return _escapedModel;
	}

	@Override
	public Object clone() {
		FolderImpl folderImpl = new FolderImpl();

		folderImpl.setFolderId(getFolderId());
		folderImpl.setCompanyId(getCompanyId());
		folderImpl.setUserId(getUserId());
		folderImpl.setUserName(getUserName());
		folderImpl.setCreateDate(getCreateDate());
		folderImpl.setModifiedDate(getModifiedDate());
		folderImpl.setAccountId(getAccountId());
		folderImpl.setFullName(getFullName());
		folderImpl.setDisplayName(getDisplayName());
		folderImpl.setRemoteMessageCount(getRemoteMessageCount());

		folderImpl.resetOriginalValues();

		return folderImpl;
	}

	@Override
	public int compareTo(Folder folder) {
		int value = 0;

		value = getFullName().compareTo(folder.getFullName());

		if (value != 0) {
			return value;
		}

		return 0;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (!(obj instanceof Folder)) {
			return false;
		}

		Folder folder = (Folder)obj;

		long primaryKey = folder.getPrimaryKey();

		if (getPrimaryKey() == primaryKey) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public int hashCode() {
		return (int)getPrimaryKey();
	}

	@Override
	public boolean isEntityCacheEnabled() {
		return _entityCacheEnabled;
	}

	@Override
	public boolean isFinderCacheEnabled() {
		return _finderCacheEnabled;
	}

	@Override
	public void resetOriginalValues() {
		FolderModelImpl folderModelImpl = this;

		folderModelImpl._setModifiedDate = false;

		folderModelImpl._originalAccountId = folderModelImpl._accountId;

		folderModelImpl._setOriginalAccountId = false;

		folderModelImpl._originalFullName = folderModelImpl._fullName;

		folderModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<Folder> toCacheModel() {
		FolderCacheModel folderCacheModel = new FolderCacheModel();

		folderCacheModel.folderId = getFolderId();

		folderCacheModel.companyId = getCompanyId();

		folderCacheModel.userId = getUserId();

		folderCacheModel.userName = getUserName();

		String userName = folderCacheModel.userName;

		if ((userName != null) && (userName.length() == 0)) {
			folderCacheModel.userName = null;
		}

		Date createDate = getCreateDate();

		if (createDate != null) {
			folderCacheModel.createDate = createDate.getTime();
		}
		else {
			folderCacheModel.createDate = Long.MIN_VALUE;
		}

		Date modifiedDate = getModifiedDate();

		if (modifiedDate != null) {
			folderCacheModel.modifiedDate = modifiedDate.getTime();
		}
		else {
			folderCacheModel.modifiedDate = Long.MIN_VALUE;
		}

		folderCacheModel.accountId = getAccountId();

		folderCacheModel.fullName = getFullName();

		String fullName = folderCacheModel.fullName;

		if ((fullName != null) && (fullName.length() == 0)) {
			folderCacheModel.fullName = null;
		}

		folderCacheModel.displayName = getDisplayName();

		String displayName = folderCacheModel.displayName;

		if ((displayName != null) && (displayName.length() == 0)) {
			folderCacheModel.displayName = null;
		}

		folderCacheModel.remoteMessageCount = getRemoteMessageCount();

		return folderCacheModel;
	}

	@Override
	public String toString() {
		Map<String, Function<Folder, Object>> attributeGetterFunctions =
			getAttributeGetterFunctions();

		StringBundler sb = new StringBundler(
			4 * attributeGetterFunctions.size() + 2);

		sb.append("{");

		for (Map.Entry<String, Function<Folder, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<Folder, Object> attributeGetterFunction = entry.getValue();

			sb.append(attributeName);
			sb.append("=");
			sb.append(attributeGetterFunction.apply((Folder)this));
			sb.append(", ");
		}

		if (sb.index() > 1) {
			sb.setIndex(sb.index() - 1);
		}

		sb.append("}");

		return sb.toString();
	}

	@Override
	public String toXmlString() {
		Map<String, Function<Folder, Object>> attributeGetterFunctions =
			getAttributeGetterFunctions();

		StringBundler sb = new StringBundler(
			5 * attributeGetterFunctions.size() + 4);

		sb.append("<model><model-name>");
		sb.append(getModelClassName());
		sb.append("</model-name>");

		for (Map.Entry<String, Function<Folder, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<Folder, Object> attributeGetterFunction = entry.getValue();

			sb.append("<column><column-name>");
			sb.append(attributeName);
			sb.append("</column-name><column-value><![CDATA[");
			sb.append(attributeGetterFunction.apply((Folder)this));
			sb.append("]]></column-value></column>");
		}

		sb.append("</model>");

		return sb.toString();
	}

	private static class EscapedModelProxyProviderFunctionHolder {

		private static final Function<InvocationHandler, Folder>
			_escapedModelProxyProviderFunction = _getProxyProviderFunction();

	}

	private static boolean _entityCacheEnabled;
	private static boolean _finderCacheEnabled;

	private long _folderId;
	private long _companyId;
	private long _userId;
	private String _userName;
	private Date _createDate;
	private Date _modifiedDate;
	private boolean _setModifiedDate;
	private long _accountId;
	private long _originalAccountId;
	private boolean _setOriginalAccountId;
	private String _fullName;
	private String _originalFullName;
	private String _displayName;
	private int _remoteMessageCount;
	private long _columnBitmask;
	private Folder _escapedModel;

}