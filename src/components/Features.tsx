import check from "../assets/icons/check.svg";

export default function Features() {
	return (
		<section className="py-10">
			<div className="max-ctn mb-16  text-center">
				<p className="text-brandPurple font-semibold text-sm">You First</p>
				<h2 className="text-3xl font-semibold text-darkBlue leading-snug mt-3">Sublime Features</h2>
			</div>

			<div className="max-ctn max-w-220 flex flex-wrap md:gap-4 gap-6 justify-center">
				{features.map((feature, i) => (
					<div
						key={i}
						className="flex gap-4 sm:w-104 w-full bg-[#F9F7FC] px-3 py-4 shadow-xs rounded-xl border-2 border-brandPurple/5"
					>
						<img src={check} alt="check" className="w-5 h-5 mt-1" />

						<p className="leading-relaxed text-black/60 text-sm">
							<span className="font-semibold text-darkBlue">{feature.title}</span> {feature.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

const features = [
	{
		title: "Industry Aligned Curriculum:",
		desc: "Our hands-on training programs transform beginners into highly skilled professionals.",
	},
	{
		title: "Vibrant Tech Network:",
		desc: "Join 35,000+ tech pros for resources, jobs, connections, and industry updates.",
	},
	{
		title: "Career Advancement Offer:",
		desc: "Gain access to internships and job placements on course completion.",
	},
	{
		title: "Flexible Payment:",
		desc: "Our adaptable tuition payment options ensure you can focus on learning without financial stress.",
	},
];
