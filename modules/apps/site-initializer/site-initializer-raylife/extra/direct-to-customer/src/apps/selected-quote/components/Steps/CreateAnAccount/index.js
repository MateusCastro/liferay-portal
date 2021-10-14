/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from 'react';
import Style from '~/apps/selected-quote/styles/index.scss';
import {
	SendAccountRequest,
	validadePassword,
} from '~/apps/selected-quote/utils/CreateAccount';
import {WarningBadge} from '~/shared/components/fragments/Badges/Warning';
import {EMAIL_REGEX} from '~/shared/utils/patterns';
import {ListRules} from '../CreateAnAccount/listRules';

const _isEmailValid = (email) => {
	const regex = new RegExp(EMAIL_REGEX);

	return regex.test(email);
};

export const CreateAnAccount = () => {
	const [alertStatusCreate, setAlertStatusCreate] = useState(0);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [objValidate, setObjValidate] = useState({
		noSpace: 0,
		numberCaracter: 0,
		qtdCaracter: 0,
		samePassword: 0,
		symbolCaracter: 0,
		uniqueCaracter: 0,
	});

	const isEmailValid = _isEmailValid(email);

	const localVerification = () => {
		const reponse = SendAccountRequest(email, password);
		setAlertStatusCreate(reponse);
	};

	useEffect(() => {
		setAlertStatusCreate(0);
	}, [confirmPassword, email, password]);

	function allRulesOk() {
		for (const value of Object.values(objValidate)) {
			if (value !== 1) {
				return false;
			}
		}

		if (!isEmailValid) {
			return false;
		}

		return true;
	}

	return (
		<div id="ca">
			<style>{Style}</style>
			<div className="ca-sub-title">
				Create a Raylife account to continue. This will be used to login
				to your dashboard.
			</div>
			<div className="ca-width-div">
				<div id="ca-content-input">
					<input
						className="ca-input"
						id="ca-input-email"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						placeholder="sam.jones@gmail.com"
						required
						type="text"
					/>
					<label className="ca-label">Email</label>
				</div>
				<div>
					{email && !isEmailValid && (
						<WarningBadge>
							Must be a valid email address.
						</WarningBadge>
					)}
				</div>
				<div id="ca-content-input">
					<input
						className="ca-input"
						onChange={(event) => {
							setPassword(event.target.value);
							setObjValidate(
								validadePassword(
									confirmPassword,
									event.target.value
								)
							);
						}}
						placeholder="Create a Password"
						required
						type="password"
					/>
					<label className="ca-label">Password</label>
				</div>
				<div id="ca-content-input">
					<input
						className="ca-input"
						onChange={(event) => {
							setConfirmPassword(event.target.value);
							setObjValidate(
								validadePassword(event.target.value, password)
							);
						}}
						placeholder="Re-enter Password"
						required
						type="password"
					/>
					<label className="ca-label">Re-enter Password</label>
				</div>

				<ListRules objRule={objValidate} />
			</div>
			<div className="ca-align-right">
				<button
					className="btn ca-btn"
					disabled={!allRulesOk()}
					onClick={() => {
						allRulesOk() ? localVerification() : null;
					}}
				>
					CREATE ACCOUNT
				</button>
			</div>

			{email && alertStatusCreate === 1 && (
				<div className="ca-alert-create">
					<WarningBadge>
						Unable to create your account. Please try again
					</WarningBadge>
				</div>
			)}
		</div>
	);
};
