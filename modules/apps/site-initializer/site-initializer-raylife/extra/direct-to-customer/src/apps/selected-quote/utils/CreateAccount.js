import {NUMBER_REGEX, SYMBOL_REGEX} from '~/shared/utils/patterns';

export function SendAccountRequest(email, password) {
	/* eslint-disable no-console */
	console.log(email, password);

	return 1;
}

export function validadePassword(confirmPassword, password) {
	const rules = {
		noSpace: 0,
		numberCaracter: 0,
		qtdCaracter: 0,
		samePassword: 0,
		symbolCaracter: 0,
		uniqueCaracter: 0,
	};

	if (confirmPassword && password) {
		if (confirmPassword && password !== confirmPassword) {
			rules['samePassword'] = 2;
		} else if (confirmPassword && password === confirmPassword) {
			rules['samePassword'] = 1;
		} else {
			rules['samePassword'] = 0;
		}
	}

	if (password) {
		if (password?.length >= 8) {
			rules['qtdCaracter'] = 1;
		} else {
			rules['qtdCaracter'] = 2;
		}

		const uniqueValues = new Set();
		for (let i = 0; i < password?.length; i++) {
			uniqueValues.add(password?.charAt(i));
			if (uniqueValues.size >= 5) {
				rules['uniqueCaracter'] = 1;
				break;
			} else {
				rules['uniqueCaracter'] = 2;
			}
		}

		const regexSymbol = new RegExp(SYMBOL_REGEX);
		if (regexSymbol.test(password)) {
			rules['symbolCaracter'] = 1;
		} else {
			rules['symbolCaracter'] = 2;
		}

		const regexNumber = new RegExp(NUMBER_REGEX);
		if (regexNumber.test(password)) {
			rules['numberCaracter'] = 1;
		} else {
			rules['numberCaracter'] = 2;
		}

		if (!password?.includes(' ')) {
			rules['noSpace'] = 1;
		} else {
			rules['noSpace'] = 2;
		}
	}

	return rules;
}
