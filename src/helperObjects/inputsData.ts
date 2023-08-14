const inputs = {
	username: {
		id: 1,
		name: "username",
		inputType: "text",
		placeHolder: "Username",
		label: "Username",
		errorMessage: "",
		pattern: /^[a-zA-Z0-9_-]{3,16}$/,
	},
	email: {
		id: 2,
		name: "email",
		inputType: "text",
		placeHolder: "Email",
		label: "Email",
		errorMessage: "",
		pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
	},
	birthday: {
		id: 3,
		name: "birthday",
		inputType: "date",
		placeHolder: "Birthday",
		label: "Birthday",
		errorMessage: "",
		pattern: /^\d{4}-\d{2}-\d{2}$/,
	},
	password: {
		id: 4,
		name: "password",
		inputType: "password",
		placeHolder: "Password",
		label: "Password",
		errorMessage: "",
		pattern: /^(?=.*\d).{8,}$/,
	},
	confirmPassword: {
		id: 5,
		name: "confirmPassword",
		inputType: "password",
		placeHolder: "Confirm Password",
		label: "Confirm Password",
		errorMessage: "",
		pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}/,
	},
};

export default inputs;
