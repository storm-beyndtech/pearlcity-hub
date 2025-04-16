import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import missionAsset from "../assets/Cybernetic-Workspace.jpg";
import { Link } from "react-router-dom";

export const Mission: React.FC = () => {
	return (
		<section className="sm:py-10 my-30 relative overflow-hidden">
			<div className="flex flex-col-reverse lg:flex-row gap-16 items-center justify-space-between max-ctn">
				<motion.div
					className="lg:w-1/2"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<img src={missionAsset} alt="Pearlcity Hub Mission and Vision" className="rounded-2xl" />
				</motion.div>

				<div className="w-full max-w-136">
					{/* Mission */}
					<motion.h2
						className="text-4xl font-semibold mb-7.5"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Mission
					</motion.h2>
					<motion.p
						className="text-lg text-gray-600 mb-6 font-sans leading-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Inspiring and equipping individuals and businesses with the knowledge and tools to navigate the
						future, prioritizing innovation, integrity, and excellence to transform potential into reality.
					</motion.p>

					{/* Vision */}
					<motion.h2
						className="text-4xl font-semibold mb-7.5"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Vision
					</motion.h2>
					<motion.p
						className="text-lg text-gray-600 mb-6 font-sans leading-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Empowering the next generation of African tech leaders and positions them as key players in
						shaping the global future
					</motion.p>

					<Link
						to="/contact"
						className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 transition-colors"
					>
						Get in touch with us <ArrowRight size={20} className="ml-3" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Mission;
