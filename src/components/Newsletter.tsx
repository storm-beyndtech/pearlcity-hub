import topCurve from "../assets/icons/green-curve.svg";
import bottomCurve from "../assets/icons/purple-curve.svg";

export default function Newsletter() {
	return (
		<div className="max-ctn">
			<div className="w-full relative overflow-hidden bg-darkBlue2 rounded-2xl py-16 px-4 grid place-content-center gap-10">
				<h2 className="text-4xl font-bold text-white text-center"> Subscribe for Updates</h2>

				<div className="flex max-sm:flex-col justify-center gap-4">
					<input
						placeholder="Enter Your Email"
						className="px-5 py-3 rounded-lg border border-brandPurple 
          focus:border-brandGreen outline-none placeholder:text-gray-600"
					/>
					<button className="bg-brandGreen text-black px-7 max-sm:px-5 py-3 font-semibold rounded-lg">
						Subscribe Now
					</button>
				</div>

				{/* Floating Curves */}
				<div className="absolute top-0 left-0">
					<img src={topCurve} alt="curve" className="max-sm:w-20" />
				</div>

				<div className="absolute bottom-0 right-0">
					<img src={bottomCurve} alt="curve" className="max-sm:w-20" />
				</div>
			</div>
		</div>
	);
}
