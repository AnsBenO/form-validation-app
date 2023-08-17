import { ChangeEvent } from "react";
import "./FormInput.css";

interface FormInputProps {
	placeHolder: string;
	inputType: string;
	innerRef?: React.MutableRefObject<HTMLInputElement | null>;
	name: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	label: string;
	errorMessage: string;
}

const FormInput = ({
	placeHolder,
	inputType,
	innerRef,
	name,
	value,
	onChange,
	label,
	errorMessage,
}: FormInputProps) => {
	return (
		<div className="form-input">
			<label htmlFor={name}>{label}</label>
			<input
				type={inputType}
				placeholder={placeHolder}
				ref={innerRef}
				name={name}
				value={value}
				onChange={onChange}
				className={`form-input ${errorMessage !== "" ? "wrong-input" : "valid-input"
					}`}
			/>
			<span className={`inner-error-${name}`}>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
