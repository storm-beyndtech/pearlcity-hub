import reactLogo from "../assets/courses/react.svg";
import jsLogo from "../assets/courses/js.svg";
import nextLogo from "../assets/courses/next.svg";
import figmaLogo from "../assets/courses/figma.svg";
import psLogo from "../assets/courses/ps.svg";
import cloudLogo from "../assets/courses/cloud.svg";
import calendar from "../assets/icons/calendar.svg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursesFlat() {
	return (
		<section>
			<div className="max-ctn flex flex-wrap justify-center gap-10 my-5 sm:px-0 px-1">
				{courses.map((course, index) => (
					<div
						key={index}
						className="grid gap-6 sm:w-140 w-full min-h-70 bg-[#F9F7FC] p-6 shadow-xs rounded-lg shrink-0"
					>
						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold text-darkBlue">
								{course.title} {course.title2}
							</h3>

							<div className="w-12 h-12 grid place-content-center p-2.5 rounded-[30%] bg-brandPurple/5">
								<img src={course.img} alt="course logo" className="w-full p-1" />
							</div>
						</div>
						<p className="text-[#8E9198] text-base leading-relaxed">{course.description}</p>
						<p className="font-semibold text-darkBlue flex items-center gap-3">
							<img src={calendar} alt="icon" />
							{course.duration}
						</p>
						<Link
							to={`/courses/${course.href}`}
							className="font-semibold text-darkBlue flex items-center gap-3"
						>
							Read more <ArrowRight size={14} />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}

const courses = [
	{
		title: "Frontend ",
		title2: "Development",
		description:
			"Kickstart your journey as a Front-End Dev today. Master the skills to craft exceptional websites and interactive apps. Learn to create dynamic, responsive, and user-friendly designs for all screen sizes.",
		duration: "3 Months | 2 days weekly",
		img: reactLogo,
		href: "frontend-development",
	},
	{
		title: "Backend",
		title2: "Development",
		description:
			"Deploy powerful web and mobile apps with Node.js. Leverage a robust ecosystem to build scalable applications. Gain expertise in APIs, databases, authentication, and clean backend architecture.",
		duration: "3 Months | 2 days weekly",
		img: jsLogo,
		href: "backend-development",
	},
	{
		title: "Full Stack",
		title2: "Development",
		description:
			"Build scalable apps with JavaScript frameworks like React and Node.js, integrating databases for efficient solutions. Master full stack development from frontend to backend and everything in between.",
		duration: "6 Months | 4 days weekly",
		img: nextLogo,
		href: "fullstack-development",
	},
	{
		title: "UI/UX",
		title2: "Design",
		description:
			"UI/UX design skills are highly sought after and versatile, spanning various products and industries. Focus on enhancing customer experiences with engaging, intuitive, and beautiful user-centered design.",
		duration: "3 Months | 2 days weekly",
		img: figmaLogo,
		href: "ui-ux-design",
	},
	{
		title: "Graphic",
		title2: "Design",
		description:
			"Unlock your creative potential and learn how to bring ideas to life through visual design. Create compelling designs for print, digital media, and beyond. Develop a strong professional portfolio.",
		duration: "3 Months | 2 days weekly",
		img: psLogo,
		href: "graphic-design",
  },
  {
    title: "Cloud",
    title2: "Fundamentals",
    description:
      "Master cloud platforms, DevOps practices, and infrastructure automation. Build scalable, secure systems with AWS, containers, and CI/CD pipelines. Learn to architect resilient cloud solutions for modern applications.",
    duration: "3 Months | 2 days weekly",
    img: cloudLogo,
    href: "cloud-fundamentals",
  }
];
