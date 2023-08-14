import inputs from "../helperObjects/inputsData";
import errors from "../helperObjects/errorsData";

const isValueEmpty = (value: string) => value.trim() === "";

const isPatternValid = (value: string, pattern: RegExp) => pattern.test(value);

const validateUsername = (value: string) => {
	if (isValueEmpty(value)) {
		return errors.username.required;
	} else if (!isPatternValid(value, inputs.username.pattern)) {
		return errors.username.invalid;
	} else {
		return "";
	}
};

const validateEmail = (value: string) => {
	if (isValueEmpty(value)) {
		return errors.email.required;
	} else if (!isPatternValid(value, inputs.email.pattern)) {
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
	return isValueEmpty(value) ? errors.birthday.required : "";
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
