import React, { ChangeEvent, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			inputType: "text",
			placeHolder: "Username",
			label: "Username",
			errorMessage: "",
			pattern: /^[a-zA-Z0-9_-]{3,16}$/,
		},
		{
			id: 2,
			name: "email",
			inputType: "text",
			placeHolder: "Email",
			label: "Email",
			errorMessage: "",
			pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
		},
		{
			id: 3,
			name: "birthday",
			inputType: "date",
			placeHolder: "Birthday",
			label: "Birthday",
			errorMessage: "",
			pattern: /^\d{4}-\d{2}-\d{2}$/,
		},
		{
			id: 4,
			name: "password",
			inputType: "password",
			placeHolder: "Password",
			label: "Password",
			errorMessage: "",
			pattern: /^(?=.*\d).{8,}$/,
		},
		{
			id: 5,
			name: "confirmPassword",
			inputType: "password",
			placeHolder: "Confirm Password",
			label: "Confirm Password",
			errorMessage: "",
			pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}/,
		},
	];

	const errors = {
		username: ["", "Invalid username", "Username is required"],
		email: ["", "Invalid email", "Email is required"],
		birthday: [
			"",
			"Invalid birthday. You must be at least 18 years old.",
			"Birthday is required",
		],
		password: ["", "Invalid password", "Password is required"],
		confirmPassword: [
			"",
			"The passwords do not match",
			"Please confirm your password",
		],
	};
	const [errorState, setErrorState] = useState({
		username: errors.username[0],
		email: errors.email[0],
		birthday: errors.birthday[0],
		password: errors.password[0],
		confirmPassword: errors.confirmPassword[0],
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		const input = inputs.find((input) => input.name === name);
		if (input) {
			switch (name) {
				case "username":
					if (value.trim() === "") {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: errors.username[2],
						}));
					} else {
						const usernamePattern = input.pattern;
						if (!usernamePattern.test(value)) {
							setErrorState((prevErrors) => ({
								...prevErrors,
								[name]: errors.username[1],
							}));
						} else {
							setErrorState((prevErrors) => ({
								...prevErrors,
								[name]: "",
							}));
						}
					}
					break;
				case "email":
					if (value.trim() === "") {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: errors.email[2],
						}));
					} else {
						const emailPattern = input.pattern;
						if (!emailPattern.test(value)) {
							setErrorState((prevErrors) => ({
								...prevErrors,
								[name]: errors.email[1],
							}));
						} else {
							setErrorState((prevErrors) => ({
								...prevErrors,
								[name]: "",
							}));
						}
					}
					break;
				case "birthday":
					if (value.trim() === "") {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: errors.birthday[2],
						}));
					} else {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: "",
						}));
					}
					break;
				case "password":
					if (value.trim() === "") {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: errors.password[2],
						}));
					} else {
						const pswPattern = input.pattern;
						if (!pswPattern.test(value)) {
							setErrorState((prevErrors) => ({
								...prevErrors,
								[name]: errors.password[1],
							}));
						} else {
							setErrorState((prevErrors) => ({
								...prevErrors,
								[name]: "",
							}));
						}
					}
					break;
				case "confirmPassword":
					if (value.trim() === "") {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: errors.confirmPassword[2],
						}));
					} else if (value !== values.password) {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: errors.confirmPassword[1],
						}));
					} else {
						setErrorState((prevErrors) => ({
							...prevErrors,
							[name]: "",
						}));
					}
					break;
				default:
					break;
			}
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className="app">
			<form onSubmit={handleSubmit}>
				<h1>Registration Form</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						label={input.label}
						name={input.name}
						inputType={input.inputType}
						placeHolder={input.placeHolder}
						value={values[input.name as keyof typeof values] ?? ""}
						onChange={handleChange}
						errorMessage={
							errorState[input.name as keyof typeof errorState] ?? ""
						}
					/>
				))}
				<button className="submit-button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
