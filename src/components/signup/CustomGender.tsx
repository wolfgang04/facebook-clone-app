export default function CustomGender() {
	return (
		<div className="mt-[10px]">
			<select
				name="pronoun"
				id="pronoun"
				className="my-1 h-9 w-[400px] rounded-md border-2 pl-2 pr-5 outline-none"
			>
				<option value="">Select your pronoun</option>
				<option value="She">She: "Wish her a happy birthday!"</option>
				<option value="He">He: "Wish him a happy birthday!"</option>
				<option value="They">
					They: "Wish them a happy birthday!"
				</option>
			</select>

			<p className="mb-2 text-xs text-[#777777]">
				Your pronoun is visible to everyone
			</p>

			<input
				type="text"
				placeholder="Gender (optional)"
				className="h-10 w-[400px] rounded-md border-2 p-[11px] outline-none"
			/>
		</div>
	);
}
