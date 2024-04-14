import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SignUpInput from "./SignUpInput";
import BirthdayFields from "./BirthdayFields";
import GenderField from "./GenderFields";
import CustomGender from "./CustomGender";

const Months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Days: number[] = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
	22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let Years: number[] = [];
const currYear = new Date();

for (let i = currYear.getFullYear(); i >= 1949; i--) {
	Years.push(i);
}

const SignUp: React.FC<{ onClose: () => void }> = (props) => {
	const [selectedGender, setSelectedGender] = useState("");

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedGender(e.target.value);
	};

	return (
		<div className="relative flex flex-col items-center justify-center">
			<div
				className="fixed left-0 top-0 z-10 h-full w-full bg-slate-50 opacity-90"
				onClick={props.onClose}
			/>

			<div className="fixed z-50 w-[432px]  rounded-md bg-white shadow-md">
				<div className="flex justify-between border-b-[1px] px-4 py-[10px] text-left">
					<div>
						<h1 className="text-[32px] font-bold">Sign Up</h1>
						<p className="text-gray-500">It's quick and easy</p>
					</div>

					<div className="cursor-pointer" onClick={props.onClose}>
						<CloseIcon />
					</div>
				</div>

				<div className="flex flex-col gap-3 p-4">
					<div className="flex flex-row justify-between">
						<SignUpInput
							id="firstName"
							placeholder="First name"
							width="w-[193.6px]"
						/>
						<SignUpInput
							id="lastName"
							placeholder="Last name"
							width="w-[193.6px]"
						/>
					</div>

					<SignUpInput
						id="contact"
						placeholder="Mobile number or email"
						width=""
					/>
					<SignUpInput
						id="password"
						placeholder="New password"
						width=""
					/>

					<div>
						<span className="text-xs">Birthday</span>
						<div className="flex flex-row gap-3">
							<BirthdayFields
								field="month"
								id="month"
								options={Months}
							/>
							<BirthdayFields
								field="day"
								id="day"
								options={Days}
							/>
							<BirthdayFields
								field="year"
								id="year"
								options={Years}
							/>
						</div>
					</div>

					<div>
						<span className="text-xs">Gender</span>
						<div className="flex gap-3">
							<GenderField
								type="Female"
								name="Gender-selection"
								w="128px"
								onSelect={handleSelect}
								selectedGender={selectedGender}
							/>
							<GenderField
								type="Male"
								name="Gender-selection"
								w="111px"
								onSelect={handleSelect}
								selectedGender={selectedGender}
							/>
							<GenderField
								type="Custom"
								name="Gender-selection"
								w="130px"
								onSelect={handleSelect}
								selectedGender={selectedGender}
							/>
						</div>

						{selectedGender === "Custom" && <CustomGender />}
					</div>

					<p className="text-[11px] text-[#777777]">
						People who use our service may have uploaded your
						contact information to Facebook. Learn more.
					</p>
					<p className="text-[11px] text-[#777777]">
						By clicking Sign Up, you agree to our Terms, Privacy
						Policy and Cookies Policy. You may receive SMS
						Notifications from us and can opt out any time.
					</p>

					<div className="flex h-14 items-center justify-center text-lg">
						<button className="mt-[6px] h-9 w-48 rounded-md bg-lime-green font-bold text-white">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
