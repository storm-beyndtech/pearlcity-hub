import reactBg from "../assets/react.svg";
import Partners from "./Partners";

export default function Hero() {
	return (
		<section className="relative w-full h-[800px] max-sm:h-[700px] overflow-hidden">
			<div className="md:text-center pt-40 max-sm:pt-30 max-md:px-4 absolute inset-0 z-2">
				<h1
					className="max-w-6xl max-sm:tracking-widest mx-auto text-[12vw] 
        lg:text-8xl md:text-7xl font-semibold max-sm:font-bold text-gray-900 lg:leading-26 md:leading-22 leading-[14vw]"
				>
					<span className="text-brandPurple max-sm:text-[11vw] block">Empowering</span> Minds Across the
					Globe, One <span className="text-brandPurple"> Skill</span> at a Time
				</h1>
				<p className="max-w-2xl max-sm:max-w-[290px] sm:mx-auto mt-5 sm:mt-10 text-gray-500 text-base md:text-lg leading-7">
					Discover a universe of possibilities with practical training designed to launch individuals and
					businesses into the future of technology.
				</p>

				<div className="pt-10 sm:pt-20">
					<Partners />
				</div>
			</div>

			<div className="w-full max-sm:h-[120vh] max-sm:w-[120vh]  overflow-hidden blur-sm">
				<img
					className="w-full h-full sm:mt-[-30vh] max-sm:ml-[-20vw] spin"
					src={reactBg}
					alt="react-spinner"
				/>
			</div>

			<div className="absolute inset-x-0 bottom-5 z-2"></div>
		</section>
	);
}
