import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "../assets/Pearl-Sec.jpg";
import { Link } from "react-router-dom";

export const AboutSec: React.FC = () => {
	return (
		<section className="sm:py-10 relative overflow-hidden">
			<div className="flex flex-col lg:flex-row gap-16 items-center justify-space-between max-ctn">
				<div className="w-full max-w-136">
					<motion.h2
						className="text-4xl font-semibold mb-7.5"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Who We Are
					</motion.h2>
					<motion.p
						className="text-lg text-gray-600 mb-6 font-sans leading-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Pearlcity Hub is a dynamic platform empowering individuals and organizations through technology.
						We bridge the gap between technology and real-world applications, offering top-tier training and
						support from beginner to expert, to foster technological excellence.
					</motion.p>
					<motion.p
						className="text-lg text-gray-600 mb-8 font-sans leading-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						We provide hands-on training, projects, and cohorts to help you apply your skills in real-world
						scenarios.
					</motion.p>

					<Link
						to="/contact"
						className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 transition-colors"
					>
						Get in touch with us <ArrowRight size={20} className="ml-3" />
					</Link>
				</div>
				<motion.div
					className="lg:w-1/2"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<img src={aboutImg} alt="About Pearlcity Hub" className="bg-transparent" />
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSec;
