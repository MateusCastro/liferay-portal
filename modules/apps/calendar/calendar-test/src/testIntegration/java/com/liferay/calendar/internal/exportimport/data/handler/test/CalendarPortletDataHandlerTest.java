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

package com.liferay.calendar.internal.exportimport.data.handler.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.calendar.constants.CalendarPortletKeys;
import com.liferay.exportimport.kernel.lar.DataLevel;
import com.liferay.exportimport.test.util.lar.BasePortletDataHandlerTestCase;
import com.liferay.portal.kernel.test.rule.AggregateTestRule;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;

import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.runner.RunWith;

/**
 * @author Zoltan Csaszi
 */
@RunWith(Arquillian.class)
public class CalendarPortletDataHandlerTest
	extends BasePortletDataHandlerTestCase {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new LiferayIntegrationTestRule();

	@Override
	protected void addStagedModels() throws Exception {
	}

	@Override
	protected DataLevel getDataLevel() {
		return DataLevel.PORTLET_INSTANCE;
	}

	@Override
	protected String[] getDataPortletPreferences() {
		return new String[] {
			"defaultDuration", "defaultView", "displaySchedulerHeader",
			"displaySchedulerOnly", "enableRss", "eventsPerPage",
			"maxDaysDisplayed", "portletSetupCss", "portletSetupUseCustomTitle",
			"rssDelta", "rssDisplayStyle", "rssFeedType", "rssTimeInterval",
			"showAgendaView", "showDayView", "showMonthView", "showUserEvents",
			"showWeekView", "timeFormat", "timeZoneId", "usePortalTimeZone",
			"weekStartsOn"
		};
	}

	@Override
	protected String getPortletId() {
		return CalendarPortletKeys.CALENDAR;
	}

	@Override
	protected boolean isDataPortalLevel() {
		return false;
	}

	@Override
	protected boolean isDataPortletInstanceLevel() {
		return true;
	}

	@Override
	protected boolean isDataSiteLevel() {
		return false;
	}

	@Override
	protected boolean isDisplayPortlet() {
		return true;
	}

}