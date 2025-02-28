import { useEffect, useRef, useState } from "react";
import doubleCheck from "../assets/icons/double-check.svg";
import Btn from "./Btn";

export default function WhyChooseUs() {
	const slideSectionWrapperRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const updateScrollButtons = () => {
		if (slideSectionWrapperRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = slideSectionWrapperRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
		}
	};

	useEffect(() => {
		const current = slideSectionWrapperRef.current;
		if (current) {
			current.addEventListener("scroll", updateScrollButtons);
			// Initial check
			updateScrollButtons();
			return () => current.removeEventListener("scroll", updateScrollButtons);
		}
	}, []);

	const getScrollAmount = () => {
		const isMobile = window.innerWidth < 640;
		const cardWidth = isMobile ? 400 : 465;
		const gap = 24;
		return cardWidth + gap;
	};

	const handleSlideBack = () => {
		if (slideSectionWrapperRef.current) {
			const scrollAmount = getScrollAmount();
			const currentScroll = slideSectionWrapperRef.current.scrollLeft;

			// If at the start, scroll to the beginning smoothly
			if (currentScroll < scrollAmount) {
				slideSectionWrapperRef.current.scrollTo({
					left: 0,
				});
			} else {
				slideSectionWrapperRef.current.scrollBy({
					left: -scrollAmount,
				});
			}
		}
	};

	const handleSlideFront = () => {
		if (slideSectionWrapperRef.current) {
			const scrollAmount = getScrollAmount();
			const currentScroll = slideSectionWrapperRef.current.scrollLeft;
			const maxScroll =
				slideSectionWrapperRef.current.scrollWidth - slideSectionWrapperRef.current.clientWidth;

			// If near the end, scroll to the end smoothly
			if (currentScroll + scrollAmount > maxScroll) {
				slideSectionWrapperRef.current.scrollTo({
					left: maxScroll,
				});
			} else {
				slideSectionWrapperRef.current.scrollBy({
					left: scrollAmount,
				});
			}
		}
	};

	return (
		<section className="py-16">
			<div className="max-ctn flex items-end justify-between pb-15">
				<h2 className="text-2xl sm:text-3xl font-semibold text-darkBlue leading-snug">
					Why <span className="text-brandGreen2">Choose</span> <br />
					Pearlcity Hub
				</h2>
				{/* Slide controls */}
				<div className="flex gap-3">
					<Btn type="small" direction="left" onClick={handleSlideBack} enabled={canScrollLeft} />
					<Btn type="small" direction="right" onClick={handleSlideFront} enabled={canScrollRight} />
				</div>
				<h2 className="text-3xl font-semibold text-darkBlue leading-snug text-right max-sm:hidden">
					We Are <br />
					Grandiose
				</h2>
			</div>

			{/* Wrapper with scroll */}
			<div
				className="max-ctn !max-w-[1600px] flex gap-6 overflow-x-scroll no-scrollbar my-5 sm:px-0 px-1"
				ref={slideSectionWrapperRef}
			>
				{courses.map((course, index) => (
					<div
						key={index}
						className="grid gap-4 sm:w-88 w-full min-h-50 bg-[#F9F7FC] p-6 shadow-xs rounded-lg shrink-0"
					>
						<p className="text-[#8E9198] text-sm">{course.description}</p>

						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold text-darkBlue">
								{course.title} <br />
								{course.title2}
							</h3>

							<div className="w-15 h-15 grid place-content-center p-4 rounded-[30%] bg-brandGreen/5">
								<img src={doubleCheck} alt="course logo" className="w-full" />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

const courses = [
	{
		title: "Structured, Proven ",
		title2: "Learning Journey",
		description:
			"Our courses are crafted to guide you from the basics to mastery. We provide you with the essential skills and industry practices needed to excel in the modern workforce.",
	},
	{
		title: "Acquire High-",
		title2: "Demand Skills",
		description:
			"Fast-track your tech career with our immersive training programs, designed to equip you with the most sought-after skills in today's job market.",
	},
	{
		title: "Supportive",
		title2: "Community",
		description:
			"Connect with a community of like-minded students and experienced facilitators who provide valuable insights, best practices, and consistent guidance.",
	},
	{
		title: "Flexible",
		title2: "Payment",
		description:
			"Our flexible tuition payment plans are designed to ease financial stress, allowing you to focus entirely on your learning and academic success.",
	},
	{
		title: "Advancement",
		title2: "Opportunities",
		description:
			"Upon completing your training, you'll gain access to exclusive internships and job placements, helping you kickstart or advance your career with confidence.",
	},
];
