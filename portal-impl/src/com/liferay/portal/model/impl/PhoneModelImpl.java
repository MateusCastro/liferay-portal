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

package com.liferay.portal.model.impl;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;
import com.liferay.exportimport.kernel.lar.StagedModelType;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSON;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.ModelWrapper;
import com.liferay.portal.kernel.model.Phone;
import com.liferay.portal.kernel.model.PhoneModel;
import com.liferay.portal.kernel.model.PhoneSoap;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.service.UserLocalServiceUtil;
import com.liferay.portal.kernel.util.DateUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.ProxyUtil;
import com.liferay.portal.kernel.util.Validator;

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
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

/**
 * The base model implementation for the Phone service. Represents a row in the &quot;Phone&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface </code>PhoneModel</code> exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link PhoneImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see PhoneImpl
 * @generated
 */
@JSON(strict = true)
public class PhoneModelImpl extends BaseModelImpl<Phone> implements PhoneModel {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a phone model instance should use the <code>Phone</code> interface instead.
	 */
	public static final String TABLE_NAME = "Phone";

	public static final Object[][] TABLE_COLUMNS = {
		{"mvccVersion", Types.BIGINT}, {"uuid_", Types.VARCHAR},
		{"phoneId", Types.BIGINT}, {"companyId", Types.BIGINT},
		{"userId", Types.BIGINT}, {"userName", Types.VARCHAR},
		{"createDate", Types.TIMESTAMP}, {"modifiedDate", Types.TIMESTAMP},
		{"classNameId", Types.BIGINT}, {"classPK", Types.BIGINT},
		{"number_", Types.VARCHAR}, {"extension", Types.VARCHAR},
		{"typeId", Types.BIGINT}, {"primary_", Types.BOOLEAN}
	};

	public static final Map<String, Integer> TABLE_COLUMNS_MAP =
		new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("mvccVersion", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("uuid_", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("phoneId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("companyId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("createDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("modifiedDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("classNameId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("classPK", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("number_", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("extension", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("typeId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("primary_", Types.BOOLEAN);
	}

	public static final String TABLE_SQL_CREATE =
		"create table Phone (mvccVersion LONG default 0 not null,uuid_ VARCHAR(75) null,phoneId LONG not null primary key,companyId LONG,userId LONG,userName VARCHAR(75) null,createDate DATE null,modifiedDate DATE null,classNameId LONG,classPK LONG,number_ VARCHAR(75) null,extension VARCHAR(75) null,typeId LONG,primary_ BOOLEAN)";

	public static final String TABLE_SQL_DROP = "drop table Phone";

	public static final String ORDER_BY_JPQL = " ORDER BY phone.createDate ASC";

	public static final String ORDER_BY_SQL = " ORDER BY Phone.createDate ASC";

	public static final String DATA_SOURCE = "liferayDataSource";

	public static final String SESSION_FACTORY = "liferaySessionFactory";

	public static final String TX_MANAGER = "liferayTransactionManager";

	public static final boolean ENTITY_CACHE_ENABLED = GetterUtil.getBoolean(
		com.liferay.portal.util.PropsUtil.get(
			"value.object.entity.cache.enabled.com.liferay.portal.kernel.model.Phone"),
		true);

	public static final boolean FINDER_CACHE_ENABLED = GetterUtil.getBoolean(
		com.liferay.portal.util.PropsUtil.get(
			"value.object.finder.cache.enabled.com.liferay.portal.kernel.model.Phone"),
		true);

	public static final boolean COLUMN_BITMASK_ENABLED = GetterUtil.getBoolean(
		com.liferay.portal.util.PropsUtil.get(
			"value.object.column.bitmask.enabled.com.liferay.portal.kernel.model.Phone"),
		true);

	public static final long CLASSNAMEID_COLUMN_BITMASK = 1L;

	public static final long CLASSPK_COLUMN_BITMASK = 2L;

	public static final long COMPANYID_COLUMN_BITMASK = 4L;

	public static final long PRIMARY_COLUMN_BITMASK = 8L;

	public static final long USERID_COLUMN_BITMASK = 16L;

	public static final long UUID_COLUMN_BITMASK = 32L;

	public static final long CREATEDATE_COLUMN_BITMASK = 64L;

	/**
	 * Converts the soap model instance into a normal model instance.
	 *
	 * @param soapModel the soap model instance to convert
	 * @return the normal model instance
	 */
	public static Phone toModel(PhoneSoap soapModel) {
		if (soapModel == null) {
			return null;
		}

		Phone model = new PhoneImpl();

		model.setMvccVersion(soapModel.getMvccVersion());
		model.setUuid(soapModel.getUuid());
		model.setPhoneId(soapModel.getPhoneId());
		model.setCompanyId(soapModel.getCompanyId());
		model.setUserId(soapModel.getUserId());
		model.setUserName(soapModel.getUserName());
		model.setCreateDate(soapModel.getCreateDate());
		model.setModifiedDate(soapModel.getModifiedDate());
		model.setClassNameId(soapModel.getClassNameId());
		model.setClassPK(soapModel.getClassPK());
		model.setNumber(soapModel.getNumber());
		model.setExtension(soapModel.getExtension());
		model.setTypeId(soapModel.getTypeId());
		model.setPrimary(soapModel.isPrimary());

		return model;
	}

	/**
	 * Converts the soap model instances into normal model instances.
	 *
	 * @param soapModels the soap model instances to convert
	 * @return the normal model instances
	 */
	public static List<Phone> toModels(PhoneSoap[] soapModels) {
		if (soapModels == null) {
			return null;
		}

		List<Phone> models = new ArrayList<Phone>(soapModels.length);

		for (PhoneSoap soapModel : soapModels) {
			models.add(toModel(soapModel));
		}

		return models;
	}

	public static final long LOCK_EXPIRATION_TIME = GetterUtil.getLong(
		com.liferay.portal.util.PropsUtil.get(
			"lock.expiration.time.com.liferay.portal.kernel.model.Phone"));

	public PhoneModelImpl() {
	}

	@Override
	public long getPrimaryKey() {
		return _phoneId;
	}

	@Override
	public void setPrimaryKey(long primaryKey) {
		setPhoneId(primaryKey);
	}

	@Override
	public Serializable getPrimaryKeyObj() {
		return _phoneId;
	}

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj) {
		setPrimaryKey(((Long)primaryKeyObj).longValue());
	}

	@Override
	public Class<?> getModelClass() {
		return Phone.class;
	}

	@Override
	public String getModelClassName() {
		return Phone.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		Map<String, Function<Phone, Object>> attributeGetterFunctions =
			getAttributeGetterFunctions();

		for (Map.Entry<String, Function<Phone, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<Phone, Object> attributeGetterFunction = entry.getValue();

			attributes.put(
				attributeName, attributeGetterFunction.apply((Phone)this));
		}

		attributes.put("entityCacheEnabled", isEntityCacheEnabled());
		attributes.put("finderCacheEnabled", isFinderCacheEnabled());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Map<String, BiConsumer<Phone, Object>> attributeSetterBiConsumers =
			getAttributeSetterBiConsumers();

		for (Map.Entry<String, Object> entry : attributes.entrySet()) {
			String attributeName = entry.getKey();

			BiConsumer<Phone, Object> attributeSetterBiConsumer =
				attributeSetterBiConsumers.get(attributeName);

			if (attributeSetterBiConsumer != null) {
				attributeSetterBiConsumer.accept((Phone)this, entry.getValue());
			}
		}
	}

	public Map<String, Function<Phone, Object>> getAttributeGetterFunctions() {
		return _attributeGetterFunctions;
	}

	public Map<String, BiConsumer<Phone, Object>>
		getAttributeSetterBiConsumers() {

		return _attributeSetterBiConsumers;
	}

	private static Function<InvocationHandler, Phone>
		_getProxyProviderFunction() {

		Class<?> proxyClass = ProxyUtil.getProxyClass(
			Phone.class.getClassLoader(), Phone.class, ModelWrapper.class);

		try {
			Constructor<Phone> constructor =
				(Constructor<Phone>)proxyClass.getConstructor(
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

	private static final Map<String, Function<Phone, Object>>
		_attributeGetterFunctions;
	private static final Map<String, BiConsumer<Phone, Object>>
		_attributeSetterBiConsumers;

	static {
		Map<String, Function<Phone, Object>> attributeGetterFunctions =
			new LinkedHashMap<String, Function<Phone, Object>>();
		Map<String, BiConsumer<Phone, ?>> attributeSetterBiConsumers =
			new LinkedHashMap<String, BiConsumer<Phone, ?>>();

		attributeGetterFunctions.put("mvccVersion", Phone::getMvccVersion);
		attributeSetterBiConsumers.put(
			"mvccVersion", (BiConsumer<Phone, Long>)Phone::setMvccVersion);
		attributeGetterFunctions.put("uuid", Phone::getUuid);
		attributeSetterBiConsumers.put(
			"uuid", (BiConsumer<Phone, String>)Phone::setUuid);
		attributeGetterFunctions.put("phoneId", Phone::getPhoneId);
		attributeSetterBiConsumers.put(
			"phoneId", (BiConsumer<Phone, Long>)Phone::setPhoneId);
		attributeGetterFunctions.put("companyId", Phone::getCompanyId);
		attributeSetterBiConsumers.put(
			"companyId", (BiConsumer<Phone, Long>)Phone::setCompanyId);
		attributeGetterFunctions.put("userId", Phone::getUserId);
		attributeSetterBiConsumers.put(
			"userId", (BiConsumer<Phone, Long>)Phone::setUserId);
		attributeGetterFunctions.put("userName", Phone::getUserName);
		attributeSetterBiConsumers.put(
			"userName", (BiConsumer<Phone, String>)Phone::setUserName);
		attributeGetterFunctions.put("createDate", Phone::getCreateDate);
		attributeSetterBiConsumers.put(
			"createDate", (BiConsumer<Phone, Date>)Phone::setCreateDate);
		attributeGetterFunctions.put("modifiedDate", Phone::getModifiedDate);
		attributeSetterBiConsumers.put(
			"modifiedDate", (BiConsumer<Phone, Date>)Phone::setModifiedDate);
		attributeGetterFunctions.put("classNameId", Phone::getClassNameId);
		attributeSetterBiConsumers.put(
			"classNameId", (BiConsumer<Phone, Long>)Phone::setClassNameId);
		attributeGetterFunctions.put("classPK", Phone::getClassPK);
		attributeSetterBiConsumers.put(
			"classPK", (BiConsumer<Phone, Long>)Phone::setClassPK);
		attributeGetterFunctions.put("number", Phone::getNumber);
		attributeSetterBiConsumers.put(
			"number", (BiConsumer<Phone, String>)Phone::setNumber);
		attributeGetterFunctions.put("extension", Phone::getExtension);
		attributeSetterBiConsumers.put(
			"extension", (BiConsumer<Phone, String>)Phone::setExtension);
		attributeGetterFunctions.put("typeId", Phone::getTypeId);
		attributeSetterBiConsumers.put(
			"typeId", (BiConsumer<Phone, Long>)Phone::setTypeId);
		attributeGetterFunctions.put("primary", Phone::getPrimary);
		attributeSetterBiConsumers.put(
			"primary", (BiConsumer<Phone, Boolean>)Phone::setPrimary);

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
	public String getUuid() {
		if (_uuid == null) {
			return "";
		}
		else {
			return _uuid;
		}
	}

	@Override
	public void setUuid(String uuid) {
		_columnBitmask |= UUID_COLUMN_BITMASK;

		if (_originalUuid == null) {
			_originalUuid = _uuid;
		}

		_uuid = uuid;
	}

	public String getOriginalUuid() {
		return GetterUtil.getString(_originalUuid);
	}

	@JSON
	@Override
	public long getPhoneId() {
		return _phoneId;
	}

	@Override
	public void setPhoneId(long phoneId) {
		_phoneId = phoneId;
	}

	@JSON
	@Override
	public long getCompanyId() {
		return _companyId;
	}

	@Override
	public void setCompanyId(long companyId) {
		_columnBitmask |= COMPANYID_COLUMN_BITMASK;

		if (!_setOriginalCompanyId) {
			_setOriginalCompanyId = true;

			_originalCompanyId = _companyId;
		}

		_companyId = companyId;
	}

	public long getOriginalCompanyId() {
		return _originalCompanyId;
	}

	@JSON
	@Override
	public long getUserId() {
		return _userId;
	}

	@Override
	public void setUserId(long userId) {
		_columnBitmask |= USERID_COLUMN_BITMASK;

		if (!_setOriginalUserId) {
			_setOriginalUserId = true;

			_originalUserId = _userId;
		}

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

	public long getOriginalUserId() {
		return _originalUserId;
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
		_columnBitmask = -1L;

		_createDate = createDate;
	}

	@JSON
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
	public String getClassName() {
		if (getClassNameId() <= 0) {
			return "";
		}

		return PortalUtil.getClassName(getClassNameId());
	}

	@Override
	public void setClassName(String className) {
		long classNameId = 0;

		if (Validator.isNotNull(className)) {
			classNameId = PortalUtil.getClassNameId(className);
		}

		setClassNameId(classNameId);
	}

	@JSON
	@Override
	public long getClassNameId() {
		return _classNameId;
	}

	@Override
	public void setClassNameId(long classNameId) {
		_columnBitmask |= CLASSNAMEID_COLUMN_BITMASK;

		if (!_setOriginalClassNameId) {
			_setOriginalClassNameId = true;

			_originalClassNameId = _classNameId;
		}

		_classNameId = classNameId;
	}

	public long getOriginalClassNameId() {
		return _originalClassNameId;
	}

	@JSON
	@Override
	public long getClassPK() {
		return _classPK;
	}

	@Override
	public void setClassPK(long classPK) {
		_columnBitmask |= CLASSPK_COLUMN_BITMASK;

		if (!_setOriginalClassPK) {
			_setOriginalClassPK = true;

			_originalClassPK = _classPK;
		}

		_classPK = classPK;
	}

	public long getOriginalClassPK() {
		return _originalClassPK;
	}

	@JSON
	@Override
	public String getNumber() {
		if (_number == null) {
			return "";
		}
		else {
			return _number;
		}
	}

	@Override
	public void setNumber(String number) {
		_number = number;
	}

	@JSON
	@Override
	public String getExtension() {
		if (_extension == null) {
			return "";
		}
		else {
			return _extension;
		}
	}

	@Override
	public void setExtension(String extension) {
		_extension = extension;
	}

	@JSON
	@Override
	public long getTypeId() {
		return _typeId;
	}

	@Override
	public void setTypeId(long typeId) {
		_typeId = typeId;
	}

	@JSON
	@Override
	public boolean getPrimary() {
		return _primary;
	}

	@JSON
	@Override
	public boolean isPrimary() {
		return _primary;
	}

	@Override
	public void setPrimary(boolean primary) {
		_columnBitmask |= PRIMARY_COLUMN_BITMASK;

		if (!_setOriginalPrimary) {
			_setOriginalPrimary = true;

			_originalPrimary = _primary;
		}

		_primary = primary;
	}

	public boolean getOriginalPrimary() {
		return _originalPrimary;
	}

	@Override
	public StagedModelType getStagedModelType() {
		return new StagedModelType(
			PortalUtil.getClassNameId(Phone.class.getName()), getClassNameId());
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(
			getCompanyId(), Phone.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public Phone toEscapedModel() {
		if (_escapedModel == null) {
			Function<InvocationHandler, Phone>
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
		PhoneImpl phoneImpl = new PhoneImpl();

		phoneImpl.setMvccVersion(getMvccVersion());
		phoneImpl.setUuid(getUuid());
		phoneImpl.setPhoneId(getPhoneId());
		phoneImpl.setCompanyId(getCompanyId());
		phoneImpl.setUserId(getUserId());
		phoneImpl.setUserName(getUserName());
		phoneImpl.setCreateDate(getCreateDate());
		phoneImpl.setModifiedDate(getModifiedDate());
		phoneImpl.setClassNameId(getClassNameId());
		phoneImpl.setClassPK(getClassPK());
		phoneImpl.setNumber(getNumber());
		phoneImpl.setExtension(getExtension());
		phoneImpl.setTypeId(getTypeId());
		phoneImpl.setPrimary(isPrimary());

		phoneImpl.resetOriginalValues();

		return phoneImpl;
	}

	@Override
	public int compareTo(Phone phone) {
		int value = 0;

		value = DateUtil.compareTo(getCreateDate(), phone.getCreateDate());

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

		if (!(obj instanceof Phone)) {
			return false;
		}

		Phone phone = (Phone)obj;

		long primaryKey = phone.getPrimaryKey();

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
		return ENTITY_CACHE_ENABLED;
	}

	@Override
	public boolean isFinderCacheEnabled() {
		return FINDER_CACHE_ENABLED;
	}

	@Override
	public void resetOriginalValues() {
		PhoneModelImpl phoneModelImpl = this;

		phoneModelImpl._originalUuid = phoneModelImpl._uuid;

		phoneModelImpl._originalCompanyId = phoneModelImpl._companyId;

		phoneModelImpl._setOriginalCompanyId = false;

		phoneModelImpl._originalUserId = phoneModelImpl._userId;

		phoneModelImpl._setOriginalUserId = false;

		phoneModelImpl._setModifiedDate = false;

		phoneModelImpl._originalClassNameId = phoneModelImpl._classNameId;

		phoneModelImpl._setOriginalClassNameId = false;

		phoneModelImpl._originalClassPK = phoneModelImpl._classPK;

		phoneModelImpl._setOriginalClassPK = false;

		phoneModelImpl._originalPrimary = phoneModelImpl._primary;

		phoneModelImpl._setOriginalPrimary = false;

		phoneModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<Phone> toCacheModel() {
		PhoneCacheModel phoneCacheModel = new PhoneCacheModel();

		phoneCacheModel.mvccVersion = getMvccVersion();

		phoneCacheModel.uuid = getUuid();

		String uuid = phoneCacheModel.uuid;

		if ((uuid != null) && (uuid.length() == 0)) {
			phoneCacheModel.uuid = null;
		}

		phoneCacheModel.phoneId = getPhoneId();

		phoneCacheModel.companyId = getCompanyId();

		phoneCacheModel.userId = getUserId();

		phoneCacheModel.userName = getUserName();

		String userName = phoneCacheModel.userName;

		if ((userName != null) && (userName.length() == 0)) {
			phoneCacheModel.userName = null;
		}

		Date createDate = getCreateDate();

		if (createDate != null) {
			phoneCacheModel.createDate = createDate.getTime();
		}
		else {
			phoneCacheModel.createDate = Long.MIN_VALUE;
		}

		Date modifiedDate = getModifiedDate();

		if (modifiedDate != null) {
			phoneCacheModel.modifiedDate = modifiedDate.getTime();
		}
		else {
			phoneCacheModel.modifiedDate = Long.MIN_VALUE;
		}

		phoneCacheModel.classNameId = getClassNameId();

		phoneCacheModel.classPK = getClassPK();

		phoneCacheModel.number = getNumber();

		String number = phoneCacheModel.number;

		if ((number != null) && (number.length() == 0)) {
			phoneCacheModel.number = null;
		}

		phoneCacheModel.extension = getExtension();

		String extension = phoneCacheModel.extension;

		if ((extension != null) && (extension.length() == 0)) {
			phoneCacheModel.extension = null;
		}

		phoneCacheModel.typeId = getTypeId();

		phoneCacheModel.primary = isPrimary();

		return phoneCacheModel;
	}

	@Override
	public String toString() {
		Map<String, Function<Phone, Object>> attributeGetterFunctions =
			getAttributeGetterFunctions();

		StringBundler sb = new StringBundler(
			4 * attributeGetterFunctions.size() + 2);

		sb.append("{");

		for (Map.Entry<String, Function<Phone, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<Phone, Object> attributeGetterFunction = entry.getValue();

			sb.append(attributeName);
			sb.append("=");
			sb.append(attributeGetterFunction.apply((Phone)this));
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
		Map<String, Function<Phone, Object>> attributeGetterFunctions =
			getAttributeGetterFunctions();

		StringBundler sb = new StringBundler(
			5 * attributeGetterFunctions.size() + 4);

		sb.append("<model><model-name>");
		sb.append(getModelClassName());
		sb.append("</model-name>");

		for (Map.Entry<String, Function<Phone, Object>> entry :
				attributeGetterFunctions.entrySet()) {

			String attributeName = entry.getKey();
			Function<Phone, Object> attributeGetterFunction = entry.getValue();

			sb.append("<column><column-name>");
			sb.append(attributeName);
			sb.append("</column-name><column-value><![CDATA[");
			sb.append(attributeGetterFunction.apply((Phone)this));
			sb.append("]]></column-value></column>");
		}

		sb.append("</model>");

		return sb.toString();
	}

	private static class EscapedModelProxyProviderFunctionHolder {

		private static final Function<InvocationHandler, Phone>
			_escapedModelProxyProviderFunction = _getProxyProviderFunction();

	}

	private long _mvccVersion;
	private String _uuid;
	private String _originalUuid;
	private long _phoneId;
	private long _companyId;
	private long _originalCompanyId;
	private boolean _setOriginalCompanyId;
	private long _userId;
	private long _originalUserId;
	private boolean _setOriginalUserId;
	private String _userName;
	private Date _createDate;
	private Date _modifiedDate;
	private boolean _setModifiedDate;
	private long _classNameId;
	private long _originalClassNameId;
	private boolean _setOriginalClassNameId;
	private long _classPK;
	private long _originalClassPK;
	private boolean _setOriginalClassPK;
	private String _number;
	private String _extension;
	private long _typeId;
	private boolean _primary;
	private boolean _originalPrimary;
	private boolean _setOriginalPrimary;
	private long _columnBitmask;
	private Phone _escapedModel;

}