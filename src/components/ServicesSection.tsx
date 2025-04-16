import React from "react";
import { ArrowRight, BarChart2, Code, Layout, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
	return (
		<div className="bg-white/50 p-6 rounded-2xl border-[1.5px] border-purple-300/30 hover:border-purple-300 transition-all duration-300 cursor-pointer">
			<div className="h-12 w-12 rounded-full bg-violet-50 flex items-center justify-center mb-4">
				<div className="text-violet-600">{icon}</div>
			</div>
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-gray-400 mb-4 text-sm">{description}</p>
			<a
				href="#"
				className="text-violet-600 font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300"
			>
				Send us a message
				<ArrowRight size={16} />
			</a>
		</div>
	);
};

export const ServicesSection: React.FC = () => {
	const services = [
		{
			icon: <Code size={24} />,
			title: "Custom Curriculum Design",
			description:
				"Tailored learning paths created by industry experts to match your specific career goals and skill requirements.",
		},
		{
			icon: <Users size={24} />,
			title: "1-on-1 Mentorship",
			description:
				"Connect with senior developers and tech professionals for personalized guidance and career advice.",
		},
		{
			icon: <Layout size={24} />,
			title: "Project-Based Learning",
			description:
				"Build real-world applications with hands-on projects that demonstrate your skills to potential employers.",
		},
		{
			icon: <BarChart2 size={24} />,
			title: "Career Acceleration",
			description:
				"Access to job placement services, interview preparation, and networking opportunities with our industry partners.",
		},
		{
			icon: <MessageCircle size={24} />,
			title: "Community Support",
			description:
				"Join our vibrant community of learners, alumni, and instructors for continuous growth and knowledge sharing.",
		},
	];

	return (
		<section className="py-10 px-4 bg-gradient-to-br from-white to-violet-50">
			<div className="max-ctn max-sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
					>
						<ServiceCard {...service} />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default ServicesSection;
