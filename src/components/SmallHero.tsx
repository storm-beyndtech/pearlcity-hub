import reactBg from "../assets/react.svg";

interface ISmallHero {
	title1: string;
	title2?: string;
	subtitle: string;
}

export default function SmallHero({ title1, title2, subtitle }: ISmallHero) {
	return (
		<section className="relative w-full min-h-40 max-h-100 pb-10 overflow-hidden">
			<div className="md:text-center pt-30 max-sm:pt-30 max-md:px-4 absolute inset-0 z-2">
				<h1
					className="max-w-4xl max-sm:tracking-wide mx-auto text-[12vw] 
        lg:text-7xl md:text-6xl font-semibold max-sm:font-bold text-gray-900 md:leading-22 leading-[12vw]"
				>
					<span className="max-sm:text-[11vw] block">{title1 !== "" && title1}</span> {title2 && title2}
				</h1>
				<p className="max-w-2xl max-sm:max-w-[360px] sm:mx-auto mt-5 text-gray-500 text-base md:text-lg leading-7">
					{subtitle}
				</p>
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
