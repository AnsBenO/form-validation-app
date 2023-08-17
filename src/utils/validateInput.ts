import inputs from "../helperObjects/inputsData";
import errors from "../helperObjects/errorsData";

const isValueEmpty = (value: string) => value.trim() === "";

const isPatternValid = (value: string, pattern: RegExp) => pattern.test(value);

const validateUsername = (value: string) => {
	if (isValueEmpty(value)) {
		return errors.username.required;
	} else if (!isPatternValid(value.trim(), inputs.username.pattern)) {
		return errors.username.invalid;
	} else {
		return "";
	}
};

const validateEmail = (value: string) => {
	if (isValueEmpty(value)) {
		return errors.email.required;
	} else if (!isPatternValid(value.trim(), inputs.email.pattern)) {
		return errors.email.invalid;
	} else {
		return "";
	}
};

const validatePassword = (value: string) => {
	if (isValueEmpty(value)) {
		return errors.password.required;
	} else if (!isPatternValid(value, inputs.password.pattern)) {
		return errors.password.invalid;
	} else {
		return "";
	}
};

const validateBirthday = (value: string) => {
	if (isValueEmpty(value)) {
		return errors.birthday.required;
	}
	const birthDate = new Date(value);
	const currentDate = new Date();
	const ageDiffMilliseconds = currentDate.getTime() - birthDate.getTime();
	const ageDate = new Date(ageDiffMilliseconds);

	const age = Math.abs(ageDate.getUTCFullYear() - 1970);

	if (age < 18) {
		return errors.birthday.invalidAge;
	}

	return "";
};

const validateConfirmPassword = (value: string, passwordValue: string) => {
	if (isValueEmpty(value)) {
		return errors.confirmPassword.required;
	} else if (value !== passwordValue) {
		return errors.confirmPassword.mismatch;
	} else {
		return "";
	}
};

export default {
	validateUsername,
	validateEmail,
	validateBirthday,
	validatePassword,
	validateConfirmPassword,
};
