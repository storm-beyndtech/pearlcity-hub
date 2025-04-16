import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

interface TeamMemberProps {
	name: string;
	role: string;
	image: string;
	bio: string;
	socialLinks: {
		linkedin?: string;
		twitter?: string;
		website?: string;
	};
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, socialLinks }) => {
	return (
		<motion.div
			className="group"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className="bg-gradient-to-br from-violet-600 to-blue-600 p-1 rounded-2xl shadow-lg mb-6">
				<div className="relative overflow-hidden rounded-xl aspect-[3/4]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-end p-6">
						<div>
							<p className="text-white text-sm mb-4">{bio}</p>
							<div className="flex gap-3">
								{socialLinks.linkedin && (
									<a
										href={socialLinks.linkedin}
										className="text-white hover:text-violet-200 transition-colors"
									>
										<Linkedin size={18} />
									</a>
								)}
								{socialLinks.twitter && (
									<a
										href={socialLinks.twitter}
										className="text-white hover:text-violet-200 transition-colors"
									>
										<Twitter size={18} />
									</a>
								)}
								{socialLinks.website && (
									<a
										href={socialLinks.website}
										className="text-white hover:text-violet-200 transition-colors"
									>
										<ExternalLink size={18} />
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<h4 className="text-2xl font-bold">{name}</h4>
			<p className="text-violet-600 font-medium">{role}</p>
		</motion.div>
	);
};

export const Team: React.FC = () => {
	const teamMembers = [
		{
			name: "Alex Johnson",
			role: "Founder & CEO",
			image:
				"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=500",
			bio: "Former Google engineer with 10+ years experience in edtech. Passionate about making tech education accessible globally.",
			socialLinks: {
				linkedin: "#",
				twitter: "#",
				website: "#",
			},
		},
		{
			name: "Sarah Chen",
			role: "Chief Learning Officer",
			image:
				"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=500",
			bio: "EdD in Educational Technology with experience developing curriculum at leading universities and coding bootcamps.",
			socialLinks: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Michael Santos",
			role: "CTO",
			image:
				"https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=500",
			bio: "Full-stack developer turned tech educator. Built scalable platforms serving millions of users at AWS and Meta.",
			socialLinks: {
				linkedin: "#",
				website: "#",
			},
		},
		{
			name: "Priya Singh",
			role: "VP of Partnerships",
			image:
				"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500",
			bio: "Business development expert with extensive connections across Silicon Valley and global tech ecosystems.",
			socialLinks: {
				linkedin: "#",
				twitter: "#",
				website: "#",
			},
		},
	];

	return (
		<section className="py-24 bg-gradient-to-b from-white to-violet-50">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className="text-5xl lg:text-6xl font-bold mb-6">
						Leadership <span className="text-violet-600">Team</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Meet the passionate individuals behind Pearlcity Hub's vision and success.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
					{teamMembers.map((member, index) => (
						<TeamMember key={index} {...member} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
