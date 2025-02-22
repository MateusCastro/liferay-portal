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

package com.liferay.portal.dao.orm.hibernate;

import com.liferay.petra.string.StringBundler;
import com.liferay.petra.string.StringPool;
import com.liferay.portal.kernel.util.StringUtil;

/**
 * @author Shepherd Ching
 * @author Jian Cao
 * @author László Csontos
 */
public class DB2Dialect extends org.hibernate.dialect.DB2Dialect {

	public DB2Dialect() {
		registerKeyword("for");
		registerKeyword("optimize");
	}

	@Override
	public String getForUpdateString() {
		return " for read only with rs use and keep exclusive locks";
	}

	@Override
	public String getLimitString(String sql, int offset, int limit) {
		boolean hasOffset = false;

		if ((offset > 0) || forceLimitUsage()) {
			hasOffset = true;
		}

		StringBundler sb = null;

		if (hasOffset) {
			sb = new StringBundler(11);
		}
		else {
			sb = new StringBundler(5);
		}

		if (!hasOffset) {
			addQueryForLimitedRows(sb, sql, limit);

			return sb.toString();
		}

		// Outer query

		sb.append("SELECT outerQuery.* FROM (");

		// Inner query

		sb.append("SELECT innerQuery.*, ROW_NUMBER() OVER() AS rowNumber_ ");
		sb.append("FROM (");

		addQueryForLimitedRows(sb, sql, limit);

		sb.append(") AS innerQuery");

		// Offset

		sb.append(") AS outerQuery WHERE rowNumber_ > ");
		sb.append(offset);

		return sb.toString();
	}

	@Override
	public boolean supportsVariableLimit() {
		return _SUPPORTS_VARIABLE_LIMIT;
	}

	/**
	 * @deprecated As of Athanasius (7.3.x), with no direct replacement
	 */
	@Deprecated
	protected void addOptimizeForLimitedRows(
		com.liferay.portal.kernel.util.StringBundler sb, int limit) {
	}

	/**
	 * @deprecated As of Athanasius (7.3.x), replaced by {@link
	 *             #addQueryForLimitedRows(StringBundler, String, int)}
	 */
	@Deprecated
	protected void addQueryForLimitedRows(
		com.liferay.portal.kernel.util.StringBundler sb, String sql,
		int limit) {

		StringBundler petraSB = new StringBundler();

		addQueryForLimitedRows(petraSB, sql, limit);

		sb.append(petraSB.getStrings());
	}

	protected void addQueryForLimitedRows(
		StringBundler sb, String sql, int limit) {

		sb.append(sql);
		sb.append(StringPool.SPACE);
		sb.append(
			StringUtil.replace(
				_SQL_FETCH_FIRST_LIMITED_ROWS_ONLY, "[$LIMIT$]",
				String.valueOf(limit)));
	}

	private static final String _SQL_FETCH_FIRST_LIMITED_ROWS_ONLY =
		"FETCH FIRST [$LIMIT$] ROWS ONLY";

	private static final boolean _SUPPORTS_VARIABLE_LIMIT = false;

}