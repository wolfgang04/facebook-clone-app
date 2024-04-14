interface Props {
	placeholder: string;
	id: string;
	width: string;
}

const SignUpInput: React.FC<Props> = (props) => {
	return (
		<input
			className={`h-[39.6px] ${props.width}  rounded-md border-[1px] bg-ash-gray p-[11px]`}
			placeholder={props.placeholder}
			id={props.id}
		/>
	);
};

export default SignUpInput;
