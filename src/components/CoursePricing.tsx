import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import reactLogo from "../assets/courses/react.svg";
import jsLogo from "../assets/courses/js.svg";
import nextLogo from "../assets/courses/next.svg";
import figmaLogo from "../assets/courses/figma.svg";
import psLogo from "../assets/courses/ps.svg";
import cloudLogo from "../assets/courses/cloud.svg";
import { Link } from "react-router-dom";

type Course = {
	title: string;
	title2: string;
	description: string;
	duration: string;
	img: string;
	price: number;
};

const courses = [
	{
		title: "Frontend ",
		title2: "Dev",
		description:
			"Kickstart your journey as a Front-End Dev today. Master the skills to craft exceptional websites and interactive apps.",
		duration: "3 Months | 3 days weekly",
		img: reactLogo,
		price: 250,
	},
	{
		title: "Backend",
		title2: "Dev",
		description:
			"Deploy powerful web and mobile apps with Node.js. Leverage a robust ecosystem to build scalable applications.",
		duration: "3 Months | 3 days weekly",
		img: jsLogo,
		price: 300,
	},
	{
		title: "Full Stack",
		title2: "Dev",
		description:
			"Build scalable apps with JavaScript frameworks like React and Node.js, integrating databases for efficient solutions.",
		duration: "6 Months | 3 days weekly",
		img: nextLogo,
		price: 500,
	},
	{
		title: "UI/UX",
		title2: "Design",
		description:
			"UI/UX design skills are highly sought after and versatile, spanning various products and industries. With a strong focus on enhancing customer experiences.",
		duration: "3 Months | 3 days weekly",
		img: figmaLogo,
		price: 130,
	},
	{
		title: "Graphic",
		title2: "Design",
		description:
			"Unlock your creative potential and learn how to bring ideas to life through visual design. Create compelling designs for print, digital media, and beyond.",
		duration: "3 Months | 3 days weekly",
		img: psLogo,
		price: 130,
	},
	{
		title: "Cloud",
		title2: "Engineering",
		description:
			"Master cloud platforms, DevOps practices, and infrastructure automation. Build scalable, secure systems with AWS, containers, and CI/CD pipelines.",
		duration: "3 Months | 3 days weekly",
		img: cloudLogo,
		price: 200,
	},
];

// Popular features for courses
const popularFeatures = [
	"Live instructor-led sessions",
	"Hands-on projects",
	"1-on-1 mentorship",
	"Career guidance",
	"Certificate upon completion",
];

const CourseCard = ({ course, featured = false }: { course: Course; featured: boolean }) => {
	return (
		<div
			className={`w-full max-w-94 relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
				featured ? "border border-violet-200 shadow-lg" : "border border-gray-200 shadow"
			}`}
		>
			{featured && (
				<div className="absolute top-0 right-0 bg-brandGreen/10 text-green-600 tracking-widest py-1.5 px-5 rounded-bl-lg text-xs font-semibold">
					Popular
				</div>
			)}

			<div className="py-7.5 px-5 pb-0">
				<div className="flex items-start justify-between mb-4">
					<div>
						<h3 className="text-2xl font-semibold text-gray-800">
							{course.title} <span className="text-brandPurple">{course.title2}</span>
						</h3>
						<p className="text-sm text-gray-500 mt-1">{course.duration}</p>
					</div>
					<div className="w-12 h-12 rounded-full bg-indigo-50 p-2 flex items-center justify-center">
						<img src={course.img} alt={`${course.title} logo`} className="w-8 h-8 object-contain" />
					</div>
				</div>

				<p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed my-7.5">{course.description}</p>

				<div className="mb-6">
					<div className="flex items-center mb-4">
						<span className="text-4xl font-semibold font-mono text-gray-900">${course.price}</span>
						<span className="ml-2 text-sm text-gray-500">USD</span>
						{featured && (
							<span className="ml-3 text-xs font-medium bg-green-100 text-green-800 py-1 px-2 rounded">
								20% OFF
							</span>
						)}
					</div>
					<Link to="/register">
						<button
							className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors ${
								featured
									? "bg-brandPurple text-white hover:bg-indigo-700"
									: "bg-white text-brandPurple border border-brandPurple hover:bg-indigo-50"
							}`}
						>
							Register Now
							<ArrowRight className="ml-2 w-4 h-4" />
						</button>
					</Link>
				</div>
			</div>

			<div className="px-5 pb-7.5">
				<div className="pt-4 border-t border-gray-100">
					<p className="text-xs font-medium text-gray-500 uppercase mb-3">What's included</p>
					<ul className="space-y-2">
						{popularFeatures.slice(0, 3).map((feature, i) => (
							<li key={i} className="flex items-start">
								<CheckCircle className="w-4 h-4 text-brandGreen2 mr-2 mt-0.5 flex-shrink-0" />
								<span className="text-sm text-gray-600">{feature}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

const CoursePricing = () => {
	const [selectedTab, setSelectedTab] = useState("all");

	const filteredCourses =
		selectedTab === "all"
			? courses
			: selectedTab === "dev"
			? courses.filter(
					(c) =>
						c.title.includes("Frontend") || c.title.includes("Backend") || c.title.includes("Full Stack"),
			  )
			: courses.filter((c) => c.title.includes("UI/UX") || c.title.includes("Graphic"));

	return (
		<div>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="flex justify-center mt-8 mb-16">
					<div className="inline-flex bg-gray-100 p-1 rounded-lg">
						<button
							onClick={() => setSelectedTab("all")}
							className={`px-4 py-2 text-sm font-medium rounded-md ${
								selectedTab === "all" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-700"
							}`}
						>
							All Courses
						</button>
						<button
							onClick={() => setSelectedTab("design")}
							className={`px-4 py-2 text-sm font-medium rounded-md ${
								selectedTab === "design"
									? "bg-white shadow text-gray-900"
									: "text-gray-500 hover:text-gray-700"
							}`}
						>
							Design
						</button>
						<button
							onClick={() => setSelectedTab("dev")}
							className={`px-4 py-2 text-sm font-medium rounded-md ${
								selectedTab === "dev" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-700"
							}`}
						>
							Dev
						</button>
					</div>
				</div>
			</div>

			<div className="max-ctn flex flex-wrap justify-center gap-10 gap-y-20">
				{filteredCourses.map((course, index) => (
					<CourseCard
						key={index}
						course={course}
						featured={
							course.title.includes("Full Stack") ||
							course.title.includes("UI/UX") ||
							course.title.includes("Cloud")
						}
					/>
				))}
			</div>

			<div className="mt-16 text-center">
				<p className="text-gray-600 mb-4">Not sure which course is right for you?</p>
				<Link to="/contact">
					<button className="inline-flex items-center text-brandPurple font-medium hover:text-indigo-700">
						Schedule a free consultation
						<ArrowRight className="ml-2 w-4 h-4" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CoursePricing;
