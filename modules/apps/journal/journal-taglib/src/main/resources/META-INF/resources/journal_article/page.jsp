<%--
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
--%>

<%@ include file="/journal_article/init.jsp" %>

<liferay-util:dynamic-include key="com.liferay.journal.taglib#/journal_article/page.jsp#pre" />

<%
JournalArticleDisplay articleDisplay = (JournalArticleDisplay)request.getAttribute("liferay-journal:journal-article:articleDisplay");
boolean dataAnalyticsTrackEnabled = GetterUtil.getBoolean(request.getAttribute("liferay-journal:journal-article:dataAnalyticsTrackEnabled"));
String wrapperCssClass = (String)request.getAttribute("liferay-journal:journal-article:wrapperCssClass");
%>

<c:choose>
	<c:when test="<%= articleDisplay == null %>">
		<div class="alert alert-warning">
			<liferay-ui:message key="article-is-expired-or-not-displayable" />
		</div>
	</c:when>
	<c:otherwise>
		<div class="journal-content-article <%= Validator.isNotNull(wrapperCssClass) ? wrapperCssClass : StringPool.BLANK %>" data-analytics-asset-id="<%= articleDisplay.getArticleId() %>" data-analytics-asset-title="<%= HtmlUtil.escapeAttribute(articleDisplay.getTitle()) %>" data-analytics-asset-type="web-content" <%= dataAnalyticsTrackEnabled ? "" : "data-analytics-no-track" %>>
			<c:if test='<%= GetterUtil.getBoolean((String)request.getAttribute("liferay-journal:journal-article:showTitle")) %>'>
				<%= HtmlUtil.escape(articleDisplay.getTitle()) %>
			</c:if>

			<%= articleDisplay.getContent() %>
		</div>

		<%
		List<AssetTag> assetTags = AssetTagLocalServiceUtil.getTags(JournalArticleDisplay.class.getName(), articleDisplay.getResourcePrimKey());

		PortalUtil.setPageKeywords(ListUtil.toString(assetTags, AssetTag.NAME_ACCESSOR), request);
		%>

	</c:otherwise>
</c:choose>

<liferay-util:dynamic-include key="com.liferay.journal.taglib#/journal_article/page.jsp#post" />