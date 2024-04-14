interface Props {
	field: string;
	id: string;
	options: string[] | number[];
}

const BirthdayFields: React.FC<Props> = (props) => {
	return (
		<select
			name={props.field}
			id={`select-${props.id}`}
			className="h-9 w-[125px] rounded-md border-2 pl-2 pr-5 outline-none"
		>
			<option value="">{props.options[0]}</option>
			{props.options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default BirthdayFields;
