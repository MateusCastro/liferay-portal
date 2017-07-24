create table FriendlyURLEntry (
	mvccVersion LONG default 0 not null,
	uuid_ VARCHAR(75) null,
	friendlyURLEntryId LONG not null primary key,
	groupId LONG,
	companyId LONG,
	createDate DATE null,
	modifiedDate DATE null,
	classNameId LONG,
	classPK LONG,
	defaultLanguageId VARCHAR(75) null
);

create table FriendlyURLEntryLocalization (
	mvccVersion LONG default 0 not null,
	friendlyURLEntryLocalizationId LONG not null primary key,
	companyId LONG,
	friendlyURLEntryId LONG,
	languageId VARCHAR(75) null,
	urlTitle VARCHAR(255) null,
	groupId LONG,
	classNameId LONG,
	classPK LONG
);

create table FriendlyURLEntryMapping (
	mvccVersion LONG default 0 not null,
	classNameId LONG not null,
	classPK LONG not null,
	friendlyURLEntryId LONG,
	primary key (classNameId, classPK)
);