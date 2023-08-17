import React, { ChangeEvent, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import errors from "./helperObjects/errorsData";
import inputs from "./helperObjects/inputsData";
import validateInput from "./utils/validateInput";

function App() {
	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
	});

	const [errorState, setErrorState] = useState({
		username: errors.username.default,
		email: errors.email.default,
		birthday: errors.birthday.default,
		password: errors.password.default,
		confirmPassword: errors.confirmPassword.default,
	});
	const showErrors = (name: string, value: string) => {
		switch (name) {
			case "username":
				setErrorState((prevErrors) => ({
					...prevErrors,
					[name]: validateInput.validateUsername(value),
				}));
				break;
			case "email":
				setErrorState((prevErrors) => ({
					...prevErrors,
					[name]: validateInput.validateEmail(value),
				}));
				break;
			case "password":
				setErrorState((prevErrors) => ({
					...prevErrors,
					[name]: validateInput.validatePassword(value),
				}));
				break;
			case "birthday":
				setErrorState((prevErrors) => ({
					...prevErrors,
					[name]: validateInput.validateBirthday(value),
				}));
				break;
			case "confirmPassword":
				setErrorState((prevErrors) => ({
					...prevErrors,
					[name]: validateInput.validateConfirmPassword(value, values.password),
				}));
				break;
			default:
				break;
		}
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		const input = Object.keys(inputs).find((input) => input === name);
		if (input) {
			showErrors(name, value);
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		Object.keys(values).forEach(key => showErrors(key, values[key as keyof typeof values]))
	};

	return (
		<div className="app">
			<h1>Registration Form</h1>
			<form onSubmit={handleSubmit}>
				{Object.keys(inputs).map((input) => {
					const { id, name, label, inputType, placeHolder } = inputs[input as keyof typeof inputs];
					return (
						<FormInput
							key={id}
							label={label}
							name={name}
							inputType={inputType}
							placeHolder={placeHolder}
							value={values[name as keyof typeof values]}
							onChange={handleChange}
							errorMessage={errorState[name as keyof typeof errorState]}
						/>
					);
				})}

				<button className="submit-button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
