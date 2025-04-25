import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Layers, Laptop, FileText, Tag, CheckCircle } from "lucide-react";
import coursesData from "../utils/courses";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQSection from "../components/FAQSection";

export default function CourseDetails() {
	const { courseName } = useParams();
	const navigate = useNavigate();

	// Find the course data based on URL parameter
	const course = coursesData.find((c) => c.slug === courseName);

	// Handle if course is not found
	if (!course) {
		return (
			<div className="max-ctn py-20 text-center">
				<h2 className="text-2xl font-semibold text-darkBlue">Course not found</h2>
				<p className="mt-4 text-gray-600">The course you're looking for doesn't exist.</p>
				<button
					onClick={() => navigate("/courses")}
					className="mt-6 px-6 py-2 bg-brandPurple text-white rounded-md hover:bg-brandPurple/90 transition-colors"
				>
					Back to Courses
				</button>
			</div>
		);
	}

	return (
		<div className="bg-gray-50 pt-10">
			{/* Hero Section */}
			<div className="bg-[#F9F7FC] py-16">
				<div className="max-ctn">
					<button
						onClick={() => navigate("/courses")}
						className="flex items-center gap-2 mb-6 text-darkBlue font-medium hover:text-brandPurple transition-colors"
					>
						<ArrowLeft size={18} />
						Back to Courses
					</button>

					<div className="flex flex-wrap gap-8 items-start justify-between">
						<div className="max-w-2xl">
							<h1 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">
								{course.title} {course.title2}
							</h1>
							<p className="text-lg text-gray-600 mb-6">{course.fullDescription || course.description}</p>

							<div className="flex flex-wrap gap-6 mb-8">
								<div className="flex items-center gap-2 text-darkBlue">
									<Clock size={18} className="text-brandPurple" />
									<span>{course.duration}</span>
								</div>
								{course.level && (
									<div className="flex items-center gap-2 text-darkBlue">
										<Layers size={18} className="text-brandPurple" />
										<span>Level: {course.level}</span>
									</div>
								)}
							</div>

							<Link to="/register">
								<button className="px-8 py-3 bg-brandPurple text-white rounded-lg hover:bg-brandPurple/90 transition-colors font-medium">
									Apply Now
								</button>
							</Link>
						</div>

						<div className="w-full sm:w-auto flex justify-center">
							<div className="w-32 h-32 md:w-40 md:h-40 grid place-content-center rounded-full bg-white shadow-md">
								<img src={course.img} alt={`${course.title} logo`} className="w-20 md:w-24" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Course Details */}
			<div className="max-ctn py-16">
				<div className="grid md:grid-cols-3 gap-10">
					{/* Main Content */}
					<div className="md:col-span-2">
						{/* About Section */}
						<section className="mb-12">
							<h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
								<FileText size={20} className="text-brandPurple" />
								About the Course
							</h2>
							<div className="bg-white rounded-lg shadow-sm p-6">
								<p className="text-gray-700 leading-relaxed">
									{course.aboutContent ||
										"This comprehensive program will equip you with the skills and knowledge needed to excel in the field. Through hands-on projects and expert instruction, you'll develop the expertise required for today's tech industry."}
								</p>
							</div>
						</section>

						{/* Why Choose Section */}
						<section className="mb-12">
							<h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
								<CheckCircle size={20} className="text-brandPurple" />
								Why Choose this Course
							</h2>
							<div className="bg-white rounded-lg shadow-sm p-6">
								<ul className="space-y-4">
									{(
										course.benefits || [
											"Comprehensive curriculum covering all essential concepts and technologies",
											"Real-world projects to build your portfolio and practical experience",
											"Experienced instructors with industry expertise",
											"Job-ready skills that employers are looking for",
											"In-person training with hands-on practical sessions",
										]
									).map((benefit: any, index: number) => (
										<li key={index} className="flex gap-3">
											<CheckCircle size={18} className="text-brandPurple shrink-0 mt-1" />
											<span className="text-gray-700">{benefit}</span>
										</li>
									))}
								</ul>
							</div>
						</section>

						{/* Course Outline */}
						<section className="mb-12">
							<h2 className="text-2xl font-semibold text-darkBlue mb-4 flex items-center gap-2">
								<FileText size={20} className="text-brandPurple" />
								Course Outline
							</h2>
							<div className="bg-white rounded-lg shadow-sm p-6">
								{course.modules ? (
									<div className="space-y-8">
										{course.modules.map((module: any, idx: number) => (
											<div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
												<h3 className="text-xl font-semibold text-darkBlue mb-4">{module.title}</h3>
												<ul className="space-y-3">
													{module.topics.map((topic: any, index: number) => (
														<li key={index} className="flex gap-3">
															<span className="text-brandPurple font-medium shrink-0 mt-0.5">
																Week {index + 1}:
															</span>
															<div>
																<p className="text-gray-700">{topic.name}</p>
																{topic.task && (
																	<p className="text-sm text-gray-500 mt-1">Task: {topic.task}</p>
																)}
															</div>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								) : (
									<p className="text-gray-700">Course outline will be provided upon enrollment.</p>
								)}
							</div>
						</section>
					</div>

					{/* Sidebar */}
					<div>
						{/* Course Info Card */}
						<div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-24">
							<h3 className="text-xl font-semibold text-darkBlue mb-4">Course Information</h3>

							<div className="space-y-4">
								<div className="flex items-start gap-3 pb-3 border-b border-gray-100">
									<Clock size={18} className="text-brandPurple shrink-0 mt-1" />
									<div>
										<p className="font-medium text-darkBlue">Duration</p>
										<p className="text-gray-600">{course.duration}</p>
									</div>
								</div>

								{course.level && (
									<div className="flex items-start gap-3 pb-3 border-b border-gray-100">
										<Layers size={18} className="text-brandPurple shrink-0 mt-1" />
										<div>
											<p className="font-medium text-darkBlue">Experience Level</p>
											<p className="text-gray-600">{course.level}</p>
										</div>
									</div>
								)}

								{course.cost && (
									<div className="flex items-start gap-3 pb-3 border-b border-gray-100">
										<Tag size={18} className="text-brandPurple shrink-0 mt-1" />
										<div>
											<p className="font-medium text-darkBlue">Investment</p>
											<p className="text-gray-600">{course.cost}</p>
										</div>
									</div>
								)}

								{course.prerequisites && (
									<div className="flex items-start gap-3 pb-3 border-b border-gray-100">
										<Laptop size={18} className="text-brandPurple shrink-0 mt-1" />
										<div>
											<p className="font-medium text-darkBlue">Prerequisites</p>
											<ul className="text-gray-600 space-y-1 mt-1">
												{course.prerequisites.map((prereq: any, idx: number) => (
													<li key={idx} className="flex gap-2">
														<span className="text-brandPurple">•</span>
														<span>{prereq}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								)}

								{course.projects && (
									<div className="flex items-start gap-3 pb-3 border-b border-gray-100">
										<FileText size={18} className="text-brandPurple shrink-0 mt-1" />
										<div>
											<p className="font-medium text-darkBlue">Projects</p>
											<p className="text-gray-600">{course.projects}</p>
										</div>
									</div>
								)}

								{course.schedule && (
									<div className="flex items-start gap-3">
										<Calendar size={18} className="text-brandPurple shrink-0 mt-1" />
										<div>
											<p className="font-medium text-darkBlue">Class Schedule</p>
											<p className="text-gray-600">{course.schedule}</p>
										</div>
									</div>
								)}
							</div>

							<Link to="/register">
								<button className="w-full mt-6 px-6 py-3 bg-brandPurple text-white rounded-lg hover:bg-brandPurple/90 transition-colors font-medium">
									Apply Now
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<WhyChooseUs />
			<FAQSection courseType={courseName} />
		</div>
	);
}
