import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
	endValue: string;
	label: string;
	delay: number;
	icon?: React.ReactNode;
}

const StatCounter: React.FC<StatCounterProps> = ({ endValue, label, delay }) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const countRef = useRef<HTMLDivElement>(null);
	const hasAnimated = useRef(false);

	// Extract numeric part for counting animation
	const numericValue = parseInt(endValue.replace(/\D/g, ""));

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);

					if (!hasAnimated.current) {
						hasAnimated.current = true;

						setTimeout(() => {
							let start = 0;
							const increment = Math.ceil(numericValue / 50);
							const timer = setInterval(() => {
								start += increment;
								if (start >= numericValue) {
									setCount(numericValue);
									clearInterval(timer);
								} else {
									setCount(start);
								}
							}, 40);
						}, delay);
					}
				}
			},
			{ threshold: 0.3 },
		);

		if (countRef.current) {
			observer.observe(countRef.current);
		}

		return () => {
			if (countRef.current) {
				observer.unobserve(countRef.current);
			}
		};
	}, [numericValue, delay]);

	return (
		<div
			ref={countRef}
			className={`relative overflow-hidden rounded bg-black px-6 py-5 transition-all duration-500 ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
		>
			<div className="flex items-center space-x-4">
				<h2 className="font-mono text-4xl sm:text-7xl font-semibold sm:font-medium text-brandGreen">
					{endValue.includes("+") ? `${count}+` : endValue.includes("%") ? `${count}%` : count}
				</h2>
				<p className="font-mono font-medium text-xs text-gray-400 max-w-16">{label}</p>
			</div>
		</div>
	);
};

export const FuturisticStatsCounter = () => {
	const stats = [
		{
			value: "10+",
			label: "Global Students",
		},
		{
			value: "6+",
			label: "Tech Courses",
		},
		{
			value: "60+",
			label: "Global Clients",
		},
		{
			value: "5+",
			label: "Global Partners",
		},
	];

	return (
		<section className="py-7.5 bg-black/95">
			<div className="max-w-5xl mx-auto px-1">
				<div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-7.5 gap-3 gap-y-6">
					{stats.map((stat, index) => (
						<StatCounter key={index} endValue={stat.value} label={stat.label} delay={index * 200} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FuturisticStatsCounter;
