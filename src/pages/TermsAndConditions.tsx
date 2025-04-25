import React from "react";
import { Scale, Shield, Clock, FileText } from "lucide-react";
import SmallHero from "../components/SmallHero";
import { tAndCHero } from "../utils/util";

interface SectionCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	index: number;
}

interface TermSection {
	title: string;
	content: string[];
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, description }) => {
	return (
		<div className="p-8 rounded-xl border-2 border-violet-100 bg-gradient-to-br from-white to-violet-50/50 backdrop-blur-sm shadow-lg">
			<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-6 shadow-md">
				<div className="text-white">{icon}</div>
			</div>
			<h3 className="text-2xl font-semibold mb-3">{title}</h3>
			<p className="text-gray-600 text-lg">{description}</p>
		</div>
	);
};

const TermsAndConditions: React.FC = () => {
	const sections: SectionCardProps[] = [
		{
			icon: <FileText size={32} />,
			title: "Enrollment & Registration",
			description:
				"Policies regarding student registration, payment schedules, and enrollment confirmation for all courses.",
			index: 0,
		},
		{
			icon: <Clock size={32} />,
			title: "Course Duration & Commitment",
			description:
				"Details on course lengths, weekly time commitments, and participation requirements across all programs.",
			index: 1,
		},
		{
			icon: <Scale size={32} />,
			title: "Payment & Refund Policy",
			description:
				"Information about our flexible payment options, refund eligibility periods, and payment processing details.",
			index: 2,
		},
		{
			icon: <Shield size={32} />,
			title: "Student Rights & Responsibilities",
			description:
				"Expectations for student conduct, intellectual property rules, and code of ethics for our learning community.",
			index: 3,
		},
	];

	const detailedTerms: TermSection[] = [
		{
			title: "1. Course Enrollment",
			content: [
				"1.1 Eligibility: Students must meet all prerequisites listed for each course prior to enrollment. While some courses like Frontend Development require only basic computer literacy, others like Backend Development may benefit from prior programming experience.",
				"1.2 Registration Process: Course registration is completed online through our official website. Enrollment is confirmed only after payment of the first installment or full course fee.",
				"1.3 Equipment Requirements: Students are responsible for providing their own equipment as specified in course prerequisites, typically including a laptop with minimum 8GB RAM and 256GB SSD storage.",
			],
		},
		{
			title: "2. Course Access & Delivery",
			content: [
				"2.1 Schedule Adherence: Classes will be conducted according to the published schedules (e.g., 'Mondays, Wednesdays, and Fridays' for Frontend Development). Students are expected to attend all sessions.",
				"2.2 Course Materials: All digital learning materials provided are for personal use only and may not be redistributed or shared.",
				"2.3 Learning Platform: Students will receive access to our learning management system for the duration of their course plus an additional 6 months for reference.",
			],
		},
		{
			title: "3. Payment Terms",
			content: [
				"3.1 Pricing Structure: Course fees are as published (e.g., '$1,200 for Frontend Development, $2,400 for Full Stack Development) and subject to change for future cohorts.",
				"3.2 Flexible Payment Options: Students may opt for installment plans with specific payment milestones that will be provided upon registration.",
				"3.3 Late Payments: Failure to maintain the agreed payment schedule may result in restricted access to course materials until payments are current.",
			],
		},
		{
			title: "4. Refund Policy",
			content: [
				"4.1 Cooling-Off Period: Students may request a full refund within 7 days of enrollment, provided they have not accessed more than 10% of course materials.",
				"4.2 Partial Refunds: After the cooling-off period but before the halfway point of the course, students may be eligible for a prorated refund minus administrative fees.",
				"4.3 No Refunds: No refunds will be issued after a student has completed 50% or more of any course.",
			],
		},
		{
			title: "5. Projects & Assessments",
			content: [
				"5.1 Completion Requirements: Students must complete all required assignments and capstone projects (e.g., '3 Portfolio Projects' for Frontend Development) to receive course completion certification.",
				"5.2 Intellectual Property: While students retain ownership of their final projects, they grant us a non-exclusive license to showcase their work for promotional purposes.",
				"5.3 Academic Integrity: Plagiarism or submission of work that is not the student's own will result in disciplinary action up to and including dismissal from the program without refund.",
			],
		},
		{
			title: "6. Code of Conduct",
			content: [
				"6.1 Learning Environment: Students must contribute to a positive learning environment by respecting instructors and peers.",
				"6.2 Communication Standards: All communication within our learning platforms must be professional and constructive.",
				"6.3 Prohibited Behavior: Harassment, discrimination, or disruptive behavior will not be tolerated and may result in immediate removal from the program without refund.",
			],
		},
		{
			title: "7. Modifications to Terms",
			content: [
				"7.1 Updates: These terms and conditions may be updated periodically with notice provided to all current students.",
				"7.2 Course Curriculum: While we strive to deliver all advertised module content (e.g., 'Web Development Fundamentals, JavaScript & React, Advanced Frontend Frameworks'), we reserve the right to make curriculum adjustments to reflect industry changes or improve learning outcomes.",
				"7.3 Course Schedules: In rare circumstances, class schedules may be modified with advance notice to students.",
			],
		},
	];

	return (
		<>
			<SmallHero title1={tAndCHero.title1} title2={tAndCHero.title2} subtitle={tAndCHero.subtitle} />
			<div className="max-w-7xl mx-auto px-4 pb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{sections.map((section, index) => (
						<SectionCard key={index} {...section} />
					))}
				</div>

				<div className="bg-gradient-to-br from-white to-violet-50/50 backdrop-blur-sm border-2 border-violet-100 rounded-xl p-8 shadow-lg mb-16">
					<h2 className="text-3xl font-semibold mb-6">Detailed Terms & Conditions</h2>

					<div className="space-y-8">
						{detailedTerms.map((term, index) => (
							<div key={index}>
								<h3 className="text-2xl font-semibold mb-3">{term.title}</h3>
								<div className="space-y-4 text-gray-600">
									{term.content.map((paragraph, i) => (
										<p key={i} className="text-lg">
											{paragraph}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* <div className="bg-gradient-to-br from-white to-violet-50/50 backdrop-blur-sm border-2 border-violet-100 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="text-lg text-gray-600">
            <p>
              <strong>Email:</strong> frontend@pearl-itcity.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (301) 693-5123
            </p>
            <p>
              <strong>Address:</strong> Pearlcity Hub, 15 Bori Road, Rumuibekwe, Port Harcourt.
            </p>
          </div>
        </div> */}
			</div>
		</>
	);
};

export default TermsAndConditions;
