import React from "react";
import { Award, Globe, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

interface ValueCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => {
	return (
		<motion.div
			className="p-8 rounded-xl border-2 border-violet-100 bg-gradient-to-br from-white to-violet-50/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: "easeOut",
			}}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
		>
			<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-6 shadow-md">
				<div className="text-white">{icon}</div>
			</div>
			<h3 className="text-2xl font-bold mb-3">{title}</h3>
			<p className="text-gray-600 text-lg">{description}</p>
		</motion.div>
	);
};

export const CoreValues: React.FC = () => {
	const values = [
		{
			icon: <Globe size={32} />,
			title: "Global Accessibility",
			description: "Making quality tech education accessible to learners worldwide, regardless of location.",
		},
		{
			icon: <Lightbulb size={32} />,
			title: "Innovation Focus",
			description:
				"Constantly updating our curriculum to reflect the latest industry trends and technologies.",
		},
		{
			icon: <Users size={32} />,
			title: "Community Driven",
			description:
				"Building a supportive ecosystem where students learn from each other and industry experts.",
		},
		{
			icon: <Award size={32} />,
			title: "Excellence Commitment",
			description: "Maintaining the highest standards in our teaching methodology and student outcomes.",
		},
	];

	return (
		<section className="py-24 relative overflow-hidden">
			{/* Background decorations */}
			<div className="absolute top-40 right-0 -mr-40 w-96 h-96 bg-violet-400 opacity-5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 left-0 -ml-40 w-96 h-96 bg-indigo-400 opacity-5 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-20">
					<motion.h2
						className="text-5xl lg:text-6xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						Our <span className="text-violet-600">Core Values</span>
					</motion.h2>
					<motion.p
						className="text-xl text-gray-600 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						These principles guide everything we do, from curriculum development to student support.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{values.map((value, index) => (
						<ValueCard key={index} index={index} {...value} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CoreValues;
