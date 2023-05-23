import React from "react";

const Login = () => {
	return (
		<div className="h-screen bg-grey min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center">
			<div className="max-w-screen-lg gap-10 px-28 pb-40 pt-5 min-[768px]:mx-10 min-[768px]:flex min-[768px]:justify-between min-[768px]:px-0 min-[768px]:pb-[112px] min-[768px]:pt-[72px]">
				<div className="flex min-w-[400px] flex-col justify-center gap-5 text-center min-[768px]:w-[400px] min-[768px]:text-left">
					<h1 className="mt-4 text-6xl font-bold text-trademark-blue">
						facebook
					</h1>
					<h2 className="text-[24px] leading-none">
						Connect with friends and the world around you on
						Facebook.
					</h2>
				</div>

				<div className="flex flex-col items-center justify-center min-[768px]:w-[400px]">
					<div className="mt-12 flex w-[400px] shrink-0 flex-col items-center justify-center gap-5 rounded-md bg-white p-5 pb-5 text-center shadow-lg">
						<div className="flex w-full flex-col gap-3">
							<input
								placeholder="Email or phone number"
								className="h-[51px] w-full rounded-md border-[1px] px-4 py-[14px]"
							/>
							<input
								placeholder="Password"
								className="h-[51px] w-full rounded-md border-[1px] px-4 py-[14px]"
							/>
						</div>

						<button className="h-12 w-full rounded-md bg-trademark-blue text-xl font-bold text-white">
							Log In
						</button>
						<p className="text-sm text-trademark-blue">
							Forgot password?
						</p>
						<span className="h-[1px] w-full bg-gray-200" />

						<button className="mt-[6px] h-12 w-48 rounded-md bg-lime-green font-bold text-white">
							Create new account
						</button>
					</div>

					<p className="mt-7 text-center text-sm">
						<strong>Create a Page</strong> for a celebrity, brand or
						business.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
