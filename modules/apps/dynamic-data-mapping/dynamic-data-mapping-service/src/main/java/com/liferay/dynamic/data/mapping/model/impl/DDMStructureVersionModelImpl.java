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

package com.liferay.dynamic.data.mapping.model.impl;

import com.liferay.dynamic.data.mapping.model.DDMStructureVersion;
import com.liferay.dynamic.data.mapping.model.DDMStructureVersionModel;
import com.liferay.dynamic.data.mapping.model.DDMStructureVersionSoap;
import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.exception.LocaleException;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSON;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.ModelWrapper;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.service.UserLocalServiceUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.LocaleUtil;
import com.liferay.portal.kernel.util.LocalizationUtil;
import com.liferay.portal.kernel.util.ProxyUtil;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.workflow.WorkflowConstants;

import java.io.Serializable;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationHandler;

import java.sql.Types;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import java.util.function.BiConsumer;
import java.util.function.Function;

/**
 * The base model implementation for the DDMStructureVersion service. Represents a row in the &quot;DDMStructureVersion&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface </code>DDMStructureVersionModel</code> exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link DDMStructureVersionImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see DDMStructureVersionImpl
 * @generated
 */
@JSON(strict = true)
public class DDMStructureVersionModelImpl
	extends BaseModelImpl<DDMStructureVersion>
	implements DDMStructureVersionModel {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a ddm structure version model instance should use the <code>DDMStructureVersion</code> interface instead.
	 */
	public static final String TABLE_NAME = "DDMStructureVersion";

	public static final Object[][] TABLE_COLUMNS = {
		{"mvccVersion", Types.BIGINT}, {"structureVersionId", Types.BIGINT},
		{"groupId", Types.BIGINT}, {"companyId", Types.BIGINT},
		{"userId", Types.BIGINT}, {"userName", Types.VARCHAR},
		{"createDate", Types.TIMESTAMP}, {"structureId", Types.BIGINT},
		{"version", Types.VARCHAR}, {"parentStructureId", Types.BIGINT},
		{"name", Types.VARCHAR}, {"description", Types.CLOB},
		{"definition", Types.CLOB}, {"storageType", Types.VARCHAR},
		{"type_", Types.INTEGER}, {"status", Types.INTEGER},
		{"statusByUserId", Types.BIGINT}, {"statusByUserName", Types.VARCHAR},
		{"statusDate", Types.TIMESTAMP}
	};

	public static final Map<String, Integer> TABLE_COLUMNS_MAP =
		new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("mvccVersion", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("structureVersionId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("groupId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("companyId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("createDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("structureId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("version", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("parentStructureId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("name", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("description", Types.CLOB);
		TABLE_COLUMNS_MAP.put("definition", Types.CLOB);
		TABLE_COLUMNS_MAP.put("storageType", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("type_", Types.INTEGER);
		TABLE_COLUMNS_MAP.put("status", Types.INTEGER);
		TABLE_COLUMNS_MAP.put("statusByUserId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("statusByUserName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("statusDate", Types.TIMESTAMP);
	}

	public static final String TABLE_SQL_CREATE =
		"create table DDMStructureVersion (mvccVersion LONG default 0 not null,structureVersionId LONG not null primary key,groupId LONG,companyId LONG,userId LONG,userName VARCHAR(75) null,createDate DATE null,structureId LONG,version VARCHAR(75) null,parentStructureId LONG,name STRING null,description TEXT null,definition TEXT null,storageType VARCHAR(75) null,type_ INTEGER,status INTEGER,statusByUserId LONG,statusByUserName VARCHAR(75) null,statusDate DATE null)";

	public static final String TABLE_SQL_DROP =
		"drop table DDMStructureVersion";

	public static final String ORDER_BY_JPQL =
		" ORDER BY ddmStructureVersion.structureVersionId ASC";

	public static final String ORDER_BY_SQL =
		" ORDER BY DDMStructureVersion.structureVersionId ASC";

	public static final String DATA_SOURCE = "liferayDataSource";

	public static final String SESSION_FACTORY = "liferaySessionFactory";

	public static final String TX_MANAGER = "liferayTransactionManager";

	public static final long STATUS_COLUMN_BITMASK = 1L;

	public static final long STRUCTUREID_COLUMN_BITMASK = 2L;

	public static final long VERSION_COLUMN_BITMASK = 4L;

	public static final long STRUCTUREVERSIONID_COLUMN_BITMASK = 8L;

	public static void setEntityCacheEnabled(boolean entityCacheEnabled) {
		_entityCacheEnabled = entityCacheEnabled;
	}

	public static void setFinderCacheEnabled(boolean finderCacheEnabled) {
		_finderCacheEnabled = finderCacheEnabled;
	}

	/**
	 * Converts the soap model instance into a normal model instance.
	 *
	 * @param soapModel the soap model instance to convert
	 * @return the normal model instance
	 */
	public static DDMStructureVersion toModel(
		DDMStructureVersionSoap soapModel) {

		if (soapModel == null) {
			return null;
		}

		DDMStructureVersion model = new DDMStructureVersionImpl();

		model.setMvccVersion(soapModel.getMvccVersion());
		model.setStructureVersionId(soapModel.getStructureVersionId());
		model.setGroupId(soapModel.getGroupId());
		model.setCompanyId(soapModel.getCompanyId());
		model.setUserId(soapModel.getUserId());
		model.setUserName(soapModel.getUserName());
		model.setCreateDate(soapModel.getCreateDate());
		model.setStructureId(soapModel.getStructureId());
		model.setVersion(soapModel.getVersion());
		model.setParentStructureId(soapModel.getParentStructureId());
		model.setName(soapModel.getName());
		model.setDescription(soapModel.getDescription());
		model.setDefinition(soapModel.getDefinition());
		model.setStorageType(soapModel.getStorageType());
		model.setType(soapModel.getType());
		model.setStatus(soapModel.getStatus());
		model.setStatusByUserId(soapModel.getStatusByUserId());
		model.setStatusByUserName(soapModel.getStatusByUserName());
		model.setStatusDate(soapModel.getStatusDate());

		return model;
	}

	/**
	 * Converts the soap model instances into normal model instances.
	 *
	 * @param soapModels the soap model instances to convert
	 * @return the normal model instances
	 */
	public static List<DDMStructureVersion> toModels(
		DDMStructureVersionSoap[] soapModels) {

		if (soapModels == null) {
			return null;
		}

		List<DDMStructureVersion> models = new ArrayList<DDMStructureVersion>(
			soapModels.length);

		for (DDMStructureVersionSoap soapModel : soapModels) {
			models.add(toModel(soapModel));
		}

		return models;
	}

	public DDMStructureVersionModelImpl() {
	}

	@Override
	public long getPrimaryKey() {
		return _structureVersionId;
	}

	@Override
	public void setPrimaryKey(long primaryKey) {
		setStructureVersionId(primaryKey);
	}

	@Override
	public Serializable getPrimaryKeyObj() {
		return _structureVersionId;
	}

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj) {
		setPrimaryKey(((Long)primaryKeyObj).longValue());
	}

	@Override
	public Class<?> getModelClass() {
		return DDMStructureVersion.class;
	}

	@Override
	public String getModelClassName() {
		return DDMStructureVersion.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		Map<String, Function<DDMStructureVersion, Object>>
			attributeGetterFunctions = getAttributeGetterFunctions();

		for (Map.Entry<String, Function<DDMStructureVersion, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<DDMStructureVersion, Object> attributeGetterFunction =
				entry.getValue();

			attributes.put(
				attributeName,
				attributeGetterFunction.apply((DDMStructureVersion)this));
		}

		attributes.put("entityCacheEnabled", isEntityCacheEnabled());
		attributes.put("finderCacheEnabled", isFinderCacheEnabled());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Map<String, BiConsumer<DDMStructureVersion, Object>>
			attributeSetterBiConsumers = getAttributeSetterBiConsumers();

		for (Map.Entry<String, Object> entry : attributes.entrySet()) {
			String attributeName = entry.getKey();

			BiConsumer<DDMStructureVersion, Object> attributeSetterBiConsumer =
				attributeSetterBiConsumers.get(attributeName);

			if (attributeSetterBiConsumer != null) {
				attributeSetterBiConsumer.accept(
					(DDMStructureVersion)this, entry.getValue());
			}
		}
	}

	public Map<String, Function<DDMStructureVersion, Object>>
		getAttributeGetterFunctions() {

		return _attributeGetterFunctions;
	}

	public Map<String, BiConsumer<DDMStructureVersion, Object>>
		getAttributeSetterBiConsumers() {

		return _attributeSetterBiConsumers;
	}

	private static Function<InvocationHandler, DDMStructureVersion>
		_getProxyProviderFunction() {

		Class<?> proxyClass = ProxyUtil.getProxyClass(
			DDMStructureVersion.class.getClassLoader(),
			DDMStructureVersion.class, ModelWrapper.class);

		try {
			Constructor<DDMStructureVersion> constructor =
				(Constructor<DDMStructureVersion>)proxyClass.getConstructor(
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

	private static final Map<String, Function<DDMStructureVersion, Object>>
		_attributeGetterFunctions;
	private static final Map<String, BiConsumer<DDMStructureVersion, Object>>
		_attributeSetterBiConsumers;

	static {
		Map<String, Function<DDMStructureVersion, Object>>
			attributeGetterFunctions =
				new LinkedHashMap
					<String, Function<DDMStructureVersion, Object>>();
		Map<String, BiConsumer<DDMStructureVersion, ?>>
			attributeSetterBiConsumers =
				new LinkedHashMap<String, BiConsumer<DDMStructureVersion, ?>>();

		attributeGetterFunctions.put(
			"mvccVersion", DDMStructureVersion::getMvccVersion);
		attributeSetterBiConsumers.put(
			"mvccVersion",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setMvccVersion);
		attributeGetterFunctions.put(
			"structureVersionId", DDMStructureVersion::getStructureVersionId);
		attributeSetterBiConsumers.put(
			"structureVersionId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setStructureVersionId);
		attributeGetterFunctions.put(
			"groupId", DDMStructureVersion::getGroupId);
		attributeSetterBiConsumers.put(
			"groupId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setGroupId);
		attributeGetterFunctions.put(
			"companyId", DDMStructureVersion::getCompanyId);
		attributeSetterBiConsumers.put(
			"companyId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setCompanyId);
		attributeGetterFunctions.put("userId", DDMStructureVersion::getUserId);
		attributeSetterBiConsumers.put(
			"userId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setUserId);
		attributeGetterFunctions.put(
			"userName", DDMStructureVersion::getUserName);
		attributeSetterBiConsumers.put(
			"userName",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setUserName);
		attributeGetterFunctions.put(
			"createDate", DDMStructureVersion::getCreateDate);
		attributeSetterBiConsumers.put(
			"createDate",
			(BiConsumer<DDMStructureVersion, Date>)
				DDMStructureVersion::setCreateDate);
		attributeGetterFunctions.put(
			"structureId", DDMStructureVersion::getStructureId);
		attributeSetterBiConsumers.put(
			"structureId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setStructureId);
		attributeGetterFunctions.put(
			"version", DDMStructureVersion::getVersion);
		attributeSetterBiConsumers.put(
			"version",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setVersion);
		attributeGetterFunctions.put(
			"parentStructureId", DDMStructureVersion::getParentStructureId);
		attributeSetterBiConsumers.put(
			"parentStructureId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setParentStructureId);
		attributeGetterFunctions.put("name", DDMStructureVersion::getName);
		attributeSetterBiConsumers.put(
			"name",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setName);
		attributeGetterFunctions.put(
			"description", DDMStructureVersion::getDescription);
		attributeSetterBiConsumers.put(
			"description",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setDescription);
		attributeGetterFunctions.put(
			"definition", DDMStructureVersion::getDefinition);
		attributeSetterBiConsumers.put(
			"definition",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setDefinition);
		attributeGetterFunctions.put(
			"storageType", DDMStructureVersion::getStorageType);
		attributeSetterBiConsumers.put(
			"storageType",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setStorageType);
		attributeGetterFunctions.put("type", DDMStructureVersion::getType);
		attributeSetterBiConsumers.put(
			"type",
			(BiConsumer<DDMStructureVersion, Integer>)
				DDMStructureVersion::setType);
		attributeGetterFunctions.put("status", DDMStructureVersion::getStatus);
		attributeSetterBiConsumers.put(
			"status",
			(BiConsumer<DDMStructureVersion, Integer>)
				DDMStructureVersion::setStatus);
		attributeGetterFunctions.put(
			"statusByUserId", DDMStructureVersion::getStatusByUserId);
		attributeSetterBiConsumers.put(
			"statusByUserId",
			(BiConsumer<DDMStructureVersion, Long>)
				DDMStructureVersion::setStatusByUserId);
		attributeGetterFunctions.put(
			"statusByUserName", DDMStructureVersion::getStatusByUserName);
		attributeSetterBiConsumers.put(
			"statusByUserName",
			(BiConsumer<DDMStructureVersion, String>)
				DDMStructureVersion::setStatusByUserName);
		attributeGetterFunctions.put(
			"statusDate", DDMStructureVersion::getStatusDate);
		attributeSetterBiConsumers.put(
			"statusDate",
			(BiConsumer<DDMStructureVersion, Date>)
				DDMStructureVersion::setStatusDate);

		_attributeGetterFunctions = Collections.unmodifiableMap(
			attributeGetterFunctions);
		_attributeSetterBiConsumers = Collections.unmodifiableMap(
			(Map)attributeSetterBiConsumers);
	}

	@JSON
	@Override
	public long getMvccVersion() {
		return _mvccVersion;
	}

	@Override
	public void setMvccVersion(long mvccVersion) {
		_mvccVersion = mvccVersion;
	}

	@JSON
	@Override
	public long getStructureVersionId() {
		return _structureVersionId;
	}

	@Override
	public void setStructureVersionId(long structureVersionId) {
		_structureVersionId = structureVersionId;
	}

	@JSON
	@Override
	public long getGroupId() {
		return _groupId;
	}

	@Override
	public void setGroupId(long groupId) {
		_groupId = groupId;
	}

	@JSON
	@Override
	public long getCompanyId() {
		return _companyId;
	}

	@Override
	public void setCompanyId(long companyId) {
		_companyId = companyId;
	}

	@JSON
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

	@JSON
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

	@JSON
	@Override
	public Date getCreateDate() {
		return _createDate;
	}

	@Override
	public void setCreateDate(Date createDate) {
		_createDate = createDate;
	}

	@JSON
	@Override
	public long getStructureId() {
		return _structureId;
	}

	@Override
	public void setStructureId(long structureId) {
		_columnBitmask |= STRUCTUREID_COLUMN_BITMASK;

		if (!_setOriginalStructureId) {
			_setOriginalStructureId = true;

			_originalStructureId = _structureId;
		}

		_structureId = structureId;
	}

	public long getOriginalStructureId() {
		return _originalStructureId;
	}

	@JSON
	@Override
	public String getVersion() {
		if (_version == null) {
			return "";
		}
		else {
			return _version;
		}
	}

	@Override
	public void setVersion(String version) {
		_columnBitmask |= VERSION_COLUMN_BITMASK;

		if (_originalVersion == null) {
			_originalVersion = _version;
		}

		_version = version;
	}

	public String getOriginalVersion() {
		return GetterUtil.getString(_originalVersion);
	}

	@JSON
	@Override
	public long getParentStructureId() {
		return _parentStructureId;
	}

	@Override
	public void setParentStructureId(long parentStructureId) {
		_parentStructureId = parentStructureId;
	}

	@JSON
	@Override
	public String getName() {
		if (_name == null) {
			return "";
		}
		else {
			return _name;
		}
	}

	@Override
	public String getName(Locale locale) {
		String languageId = LocaleUtil.toLanguageId(locale);

		return getName(languageId);
	}

	@Override
	public String getName(Locale locale, boolean useDefault) {
		String languageId = LocaleUtil.toLanguageId(locale);

		return getName(languageId, useDefault);
	}

	@Override
	public String getName(String languageId) {
		return LocalizationUtil.getLocalization(getName(), languageId);
	}

	@Override
	public String getName(String languageId, boolean useDefault) {
		return LocalizationUtil.getLocalization(
			getName(), languageId, useDefault);
	}

	@Override
	public String getNameCurrentLanguageId() {
		return _nameCurrentLanguageId;
	}

	@JSON
	@Override
	public String getNameCurrentValue() {
		Locale locale = getLocale(_nameCurrentLanguageId);

		return getName(locale);
	}

	@Override
	public Map<Locale, String> getNameMap() {
		return LocalizationUtil.getLocalizationMap(getName());
	}

	@Override
	public void setName(String name) {
		_name = name;
	}

	@Override
	public void setName(String name, Locale locale) {
		setName(name, locale, LocaleUtil.getDefault());
	}

	@Override
	public void setName(String name, Locale locale, Locale defaultLocale) {
		String languageId = LocaleUtil.toLanguageId(locale);
		String defaultLanguageId = LocaleUtil.toLanguageId(defaultLocale);

		if (Validator.isNotNull(name)) {
			setName(
				LocalizationUtil.updateLocalization(
					getName(), "Name", name, languageId, defaultLanguageId));
		}
		else {
			setName(
				LocalizationUtil.removeLocalization(
					getName(), "Name", languageId));
		}
	}

	@Override
	public void setNameCurrentLanguageId(String languageId) {
		_nameCurrentLanguageId = languageId;
	}

	@Override
	public void setNameMap(Map<Locale, String> nameMap) {
		setNameMap(nameMap, LocaleUtil.getDefault());
	}

	@Override
	public void setNameMap(Map<Locale, String> nameMap, Locale defaultLocale) {
		if (nameMap == null) {
			return;
		}

		setName(
			LocalizationUtil.updateLocalization(
				nameMap, getName(), "Name",
				LocaleUtil.toLanguageId(defaultLocale)));
	}

	@JSON
	@Override
	public String getDescription() {
		if (_description == null) {
			return "";
		}
		else {
			return _description;
		}
	}

	@Override
	public String getDescription(Locale locale) {
		String languageId = LocaleUtil.toLanguageId(locale);

		return getDescription(languageId);
	}

	@Override
	public String getDescription(Locale locale, boolean useDefault) {
		String languageId = LocaleUtil.toLanguageId(locale);

		return getDescription(languageId, useDefault);
	}

	@Override
	public String getDescription(String languageId) {
		return LocalizationUtil.getLocalization(getDescription(), languageId);
	}

	@Override
	public String getDescription(String languageId, boolean useDefault) {
		return LocalizationUtil.getLocalization(
			getDescription(), languageId, useDefault);
	}

	@Override
	public String getDescriptionCurrentLanguageId() {
		return _descriptionCurrentLanguageId;
	}

	@JSON
	@Override
	public String getDescriptionCurrentValue() {
		Locale locale = getLocale(_descriptionCurrentLanguageId);

		return getDescription(locale);
	}

	@Override
	public Map<Locale, String> getDescriptionMap() {
		return LocalizationUtil.getLocalizationMap(getDescription());
	}

	@Override
	public void setDescription(String description) {
		_description = description;
	}

	@Override
	public void setDescription(String description, Locale locale) {
		setDescription(description, locale, LocaleUtil.getDefault());
	}

	@Override
	public void setDescription(
		String description, Locale locale, Locale defaultLocale) {

		String languageId = LocaleUtil.toLanguageId(locale);
		String defaultLanguageId = LocaleUtil.toLanguageId(defaultLocale);

		if (Validator.isNotNull(description)) {
			setDescription(
				LocalizationUtil.updateLocalization(
					getDescription(), "Description", description, languageId,
					defaultLanguageId));
		}
		else {
			setDescription(
				LocalizationUtil.removeLocalization(
					getDescription(), "Description", languageId));
		}
	}

	@Override
	public void setDescriptionCurrentLanguageId(String languageId) {
		_descriptionCurrentLanguageId = languageId;
	}

	@Override
	public void setDescriptionMap(Map<Locale, String> descriptionMap) {
		setDescriptionMap(descriptionMap, LocaleUtil.getDefault());
	}

	@Override
	public void setDescriptionMap(
		Map<Locale, String> descriptionMap, Locale defaultLocale) {

		if (descriptionMap == null) {
			return;
		}

		setDescription(
			LocalizationUtil.updateLocalization(
				descriptionMap, getDescription(), "Description",
				LocaleUtil.toLanguageId(defaultLocale)));
	}

	@JSON
	@Override
	public String getDefinition() {
		if (_definition == null) {
			return "";
		}
		else {
			return _definition;
		}
	}

	@Override
	public void setDefinition(String definition) {
		_definition = definition;
	}

	@JSON
	@Override
	public String getStorageType() {
		if (_storageType == null) {
			return "";
		}
		else {
			return _storageType;
		}
	}

	@Override
	public void setStorageType(String storageType) {
		_storageType = storageType;
	}

	@JSON
	@Override
	public int getType() {
		return _type;
	}

	@Override
	public void setType(int type) {
		_type = type;
	}

	@JSON
	@Override
	public int getStatus() {
		return _status;
	}

	@Override
	public void setStatus(int status) {
		_columnBitmask |= STATUS_COLUMN_BITMASK;

		if (!_setOriginalStatus) {
			_setOriginalStatus = true;

			_originalStatus = _status;
		}

		_status = status;
	}

	public int getOriginalStatus() {
		return _originalStatus;
	}

	@JSON
	@Override
	public long getStatusByUserId() {
		return _statusByUserId;
	}

	@Override
	public void setStatusByUserId(long statusByUserId) {
		_statusByUserId = statusByUserId;
	}

	@Override
	public String getStatusByUserUuid() {
		try {
			User user = UserLocalServiceUtil.getUserById(getStatusByUserId());

			return user.getUuid();
		}
		catch (PortalException pe) {
			return "";
		}
	}

	@Override
	public void setStatusByUserUuid(String statusByUserUuid) {
	}

	@JSON
	@Override
	public String getStatusByUserName() {
		if (_statusByUserName == null) {
			return "";
		}
		else {
			return _statusByUserName;
		}
	}

	@Override
	public void setStatusByUserName(String statusByUserName) {
		_statusByUserName = statusByUserName;
	}

	@JSON
	@Override
	public Date getStatusDate() {
		return _statusDate;
	}

	@Override
	public void setStatusDate(Date statusDate) {
		_statusDate = statusDate;
	}

	public com.liferay.dynamic.data.mapping.model.DDMForm getDDMForm() {
		return null;
	}

	public void setDDMForm(
		com.liferay.dynamic.data.mapping.model.DDMForm ddmForm) {
	}

	@Override
	public boolean isApproved() {
		if (getStatus() == WorkflowConstants.STATUS_APPROVED) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isDenied() {
		if (getStatus() == WorkflowConstants.STATUS_DENIED) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isDraft() {
		if (getStatus() == WorkflowConstants.STATUS_DRAFT) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isExpired() {
		if (getStatus() == WorkflowConstants.STATUS_EXPIRED) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isInactive() {
		if (getStatus() == WorkflowConstants.STATUS_INACTIVE) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isIncomplete() {
		if (getStatus() == WorkflowConstants.STATUS_INCOMPLETE) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isPending() {
		if (getStatus() == WorkflowConstants.STATUS_PENDING) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isScheduled() {
		if (getStatus() == WorkflowConstants.STATUS_SCHEDULED) {
			return true;
		}
		else {
			return false;
		}
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(
			getCompanyId(), DDMStructureVersion.class.getName(),
			getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public String[] getAvailableLanguageIds() {
		Set<String> availableLanguageIds = new TreeSet<String>();

		Map<Locale, String> nameMap = getNameMap();

		for (Map.Entry<Locale, String> entry : nameMap.entrySet()) {
			Locale locale = entry.getKey();
			String value = entry.getValue();

			if (Validator.isNotNull(value)) {
				availableLanguageIds.add(LocaleUtil.toLanguageId(locale));
			}
		}

		Map<Locale, String> descriptionMap = getDescriptionMap();

		for (Map.Entry<Locale, String> entry : descriptionMap.entrySet()) {
			Locale locale = entry.getKey();
			String value = entry.getValue();

			if (Validator.isNotNull(value)) {
				availableLanguageIds.add(LocaleUtil.toLanguageId(locale));
			}
		}

		return availableLanguageIds.toArray(
			new String[availableLanguageIds.size()]);
	}

	@Override
	public String getDefaultLanguageId() {
		String xml = getName();

		if (xml == null) {
			return "";
		}

		Locale defaultLocale = LocaleUtil.getDefault();

		return LocalizationUtil.getDefaultLanguageId(xml, defaultLocale);
	}

	@Override
	public void prepareLocalizedFieldsForImport() throws LocaleException {
		Locale defaultLocale = LocaleUtil.fromLanguageId(
			getDefaultLanguageId());

		Locale[] availableLocales = LocaleUtil.fromLanguageIds(
			getAvailableLanguageIds());

		Locale defaultImportLocale = LocalizationUtil.getDefaultImportLocale(
			DDMStructureVersion.class.getName(), getPrimaryKey(), defaultLocale,
			availableLocales);

		prepareLocalizedFieldsForImport(defaultImportLocale);
	}

	@Override
	@SuppressWarnings("unused")
	public void prepareLocalizedFieldsForImport(Locale defaultImportLocale)
		throws LocaleException {

		Locale defaultLocale = LocaleUtil.getDefault();

		String modelDefaultLanguageId = getDefaultLanguageId();

		String name = getName(defaultLocale);

		if (Validator.isNull(name)) {
			setName(getName(modelDefaultLanguageId), defaultLocale);
		}
		else {
			setName(getName(defaultLocale), defaultLocale, defaultLocale);
		}

		String description = getDescription(defaultLocale);

		if (Validator.isNull(description)) {
			setDescription(
				getDescription(modelDefaultLanguageId), defaultLocale);
		}
		else {
			setDescription(
				getDescription(defaultLocale), defaultLocale, defaultLocale);
		}
	}

	@Override
	public DDMStructureVersion toEscapedModel() {
		if (_escapedModel == null) {
			Function<InvocationHandler, DDMStructureVersion>
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
		DDMStructureVersionImpl ddmStructureVersionImpl =
			new DDMStructureVersionImpl();

		ddmStructureVersionImpl.setMvccVersion(getMvccVersion());
		ddmStructureVersionImpl.setStructureVersionId(getStructureVersionId());
		ddmStructureVersionImpl.setGroupId(getGroupId());
		ddmStructureVersionImpl.setCompanyId(getCompanyId());
		ddmStructureVersionImpl.setUserId(getUserId());
		ddmStructureVersionImpl.setUserName(getUserName());
		ddmStructureVersionImpl.setCreateDate(getCreateDate());
		ddmStructureVersionImpl.setStructureId(getStructureId());
		ddmStructureVersionImpl.setVersion(getVersion());
		ddmStructureVersionImpl.setParentStructureId(getParentStructureId());
		ddmStructureVersionImpl.setName(getName());
		ddmStructureVersionImpl.setDescription(getDescription());
		ddmStructureVersionImpl.setDefinition(getDefinition());
		ddmStructureVersionImpl.setStorageType(getStorageType());
		ddmStructureVersionImpl.setType(getType());
		ddmStructureVersionImpl.setStatus(getStatus());
		ddmStructureVersionImpl.setStatusByUserId(getStatusByUserId());
		ddmStructureVersionImpl.setStatusByUserName(getStatusByUserName());
		ddmStructureVersionImpl.setStatusDate(getStatusDate());

		ddmStructureVersionImpl.resetOriginalValues();

		return ddmStructureVersionImpl;
	}

	@Override
	public int compareTo(DDMStructureVersion ddmStructureVersion) {
		long primaryKey = ddmStructureVersion.getPrimaryKey();

		if (getPrimaryKey() < primaryKey) {
			return -1;
		}
		else if (getPrimaryKey() > primaryKey) {
			return 1;
		}
		else {
			return 0;
		}
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (!(obj instanceof DDMStructureVersion)) {
			return false;
		}

		DDMStructureVersion ddmStructureVersion = (DDMStructureVersion)obj;

		long primaryKey = ddmStructureVersion.getPrimaryKey();

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
		DDMStructureVersionModelImpl ddmStructureVersionModelImpl = this;

		ddmStructureVersionModelImpl._originalStructureId =
			ddmStructureVersionModelImpl._structureId;

		ddmStructureVersionModelImpl._setOriginalStructureId = false;

		ddmStructureVersionModelImpl._originalVersion =
			ddmStructureVersionModelImpl._version;

		ddmStructureVersionModelImpl._originalStatus =
			ddmStructureVersionModelImpl._status;

		ddmStructureVersionModelImpl._setOriginalStatus = false;

		setDDMForm(null);

		ddmStructureVersionModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<DDMStructureVersion> toCacheModel() {
		DDMStructureVersionCacheModel ddmStructureVersionCacheModel =
			new DDMStructureVersionCacheModel();

		ddmStructureVersionCacheModel.mvccVersion = getMvccVersion();

		ddmStructureVersionCacheModel.structureVersionId =
			getStructureVersionId();

		ddmStructureVersionCacheModel.groupId = getGroupId();

		ddmStructureVersionCacheModel.companyId = getCompanyId();

		ddmStructureVersionCacheModel.userId = getUserId();

		ddmStructureVersionCacheModel.userName = getUserName();

		String userName = ddmStructureVersionCacheModel.userName;

		if ((userName != null) && (userName.length() == 0)) {
			ddmStructureVersionCacheModel.userName = null;
		}

		Date createDate = getCreateDate();

		if (createDate != null) {
			ddmStructureVersionCacheModel.createDate = createDate.getTime();
		}
		else {
			ddmStructureVersionCacheModel.createDate = Long.MIN_VALUE;
		}

		ddmStructureVersionCacheModel.structureId = getStructureId();

		ddmStructureVersionCacheModel.version = getVersion();

		String version = ddmStructureVersionCacheModel.version;

		if ((version != null) && (version.length() == 0)) {
			ddmStructureVersionCacheModel.version = null;
		}

		ddmStructureVersionCacheModel.parentStructureId =
			getParentStructureId();

		ddmStructureVersionCacheModel.name = getName();

		String name = ddmStructureVersionCacheModel.name;

		if ((name != null) && (name.length() == 0)) {
			ddmStructureVersionCacheModel.name = null;
		}

		ddmStructureVersionCacheModel.description = getDescription();

		String description = ddmStructureVersionCacheModel.description;

		if ((description != null) && (description.length() == 0)) {
			ddmStructureVersionCacheModel.description = null;
		}

		ddmStructureVersionCacheModel.definition = getDefinition();

		String definition = ddmStructureVersionCacheModel.definition;

		if ((definition != null) && (definition.length() == 0)) {
			ddmStructureVersionCacheModel.definition = null;
		}

		ddmStructureVersionCacheModel.storageType = getStorageType();

		String storageType = ddmStructureVersionCacheModel.storageType;

		if ((storageType != null) && (storageType.length() == 0)) {
			ddmStructureVersionCacheModel.storageType = null;
		}

		ddmStructureVersionCacheModel.type = getType();

		ddmStructureVersionCacheModel.status = getStatus();

		ddmStructureVersionCacheModel.statusByUserId = getStatusByUserId();

		ddmStructureVersionCacheModel.statusByUserName = getStatusByUserName();

		String statusByUserName =
			ddmStructureVersionCacheModel.statusByUserName;

		if ((statusByUserName != null) && (statusByUserName.length() == 0)) {
			ddmStructureVersionCacheModel.statusByUserName = null;
		}

		Date statusDate = getStatusDate();

		if (statusDate != null) {
			ddmStructureVersionCacheModel.statusDate = statusDate.getTime();
		}
		else {
			ddmStructureVersionCacheModel.statusDate = Long.MIN_VALUE;
		}

		ddmStructureVersionCacheModel._ddmForm = getDDMForm();

		return ddmStructureVersionCacheModel;
	}

	@Override
	public String toString() {
		Map<String, Function<DDMStructureVersion, Object>>
			attributeGetterFunctions = getAttributeGetterFunctions();

		StringBundler sb = new StringBundler(
			4 * attributeGetterFunctions.size() + 2);

		sb.append("{");

		for (Map.Entry<String, Function<DDMStructureVersion, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<DDMStructureVersion, Object> attributeGetterFunction =
				entry.getValue();

			sb.append(attributeName);
			sb.append("=");
			sb.append(attributeGetterFunction.apply((DDMStructureVersion)this));
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
		Map<String, Function<DDMStructureVersion, Object>>
			attributeGetterFunctions = getAttributeGetterFunctions();

		StringBundler sb = new StringBundler(
			5 * attributeGetterFunctions.size() + 4);

		sb.append("<model><model-name>");
		sb.append(getModelClassName());
		sb.append("</model-name>");

		for (Map.Entry<String, Function<DDMStructureVersion, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<DDMStructureVersion, Object> attributeGetterFunction =
				entry.getValue();

			sb.append("<column><column-name>");
			sb.append(attributeName);
			sb.append("</column-name><column-value><![CDATA[");
			sb.append(attributeGetterFunction.apply((DDMStructureVersion)this));
			sb.append("]]></column-value></column>");
		}

		sb.append("</model>");

		return sb.toString();
	}

	private static class EscapedModelProxyProviderFunctionHolder {

		private static final Function<InvocationHandler, DDMStructureVersion>
			_escapedModelProxyProviderFunction = _getProxyProviderFunction();

	}

	private static boolean _entityCacheEnabled;
	private static boolean _finderCacheEnabled;

	private long _mvccVersion;
	private long _structureVersionId;
	private long _groupId;
	private long _companyId;
	private long _userId;
	private String _userName;
	private Date _createDate;
	private long _structureId;
	private long _originalStructureId;
	private boolean _setOriginalStructureId;
	private String _version;
	private String _originalVersion;
	private long _parentStructureId;
	private String _name;
	private String _nameCurrentLanguageId;
	private String _description;
	private String _descriptionCurrentLanguageId;
	private String _definition;
	private String _storageType;
	private int _type;
	private int _status;
	private int _originalStatus;
	private boolean _setOriginalStatus;
	private long _statusByUserId;
	private String _statusByUserName;
	private Date _statusDate;
	private long _columnBitmask;
	private DDMStructureVersion _escapedModel;

}