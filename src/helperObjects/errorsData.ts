const errors = {
	username: {
		default: "",
		invalid: "Invalid username",
		required: "Username is required",
	},
	email: {
		default: "",
		invalid: "Invalid email",
		required: "Email is required",
	},
	birthday: {
		default: "",
		invalid: "Invalid birthday. You must be at least 18 years old.",
		required: "Birthday is required",
	},
	password: {
		default: "",
		invalid: "Invalid password",
		required: "Password is required",
	},
	confirmPassword: {
		default: "",
		mismatch: "The passwords do not match",
		required: "Please confirm your password",
	},
};

export default errors;
