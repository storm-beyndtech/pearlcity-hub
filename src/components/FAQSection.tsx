import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection({ courseType }: { courseType?: string }) {
	// Common FAQs for all courses
	const commonFaqs = [
		{
			question: "Do I need prior experience to take this course?",
			answer:
				"Most of our courses are designed for beginners, though some background in basic computer usage is helpful. Check the prerequisites section for specific requirements for this course.",
		},
		{
			question: "What kind of job can I get after completing this course?",
			answer:
				"Graduates of our courses have gone on to work as junior developers, designers, and other entry-level tech positions. The specific roles depend on the course taken and your previous experience.",
		},
		{
			question: "Do you offer job placement after completion?",
			answer:
				"While we don't guarantee job placement, we provide career support, resume review, interview preparation, and connections to our industry partners who frequently hire our graduates.",
		},
		{
			question: "Can I pay in installments?",
			answer:
				"Yes, we offer flexible payment plans. You can discuss payment options with our admissions team after applying for the course.",
		},
	];

	// Course-specific FAQs
	const courseFaqs = {
		"frontend-development": [
			{
				question: "What technologies will I learn in the Frontend Development course?",
				answer:
					"You'll learn HTML, CSS, JavaScript, and React, along with supporting tools like Git, npm, and responsive design techniques.",
			},
			{
				question: "Will I be able to build a complete website after this course?",
				answer:
					"Yes! By the end of the course, you'll have built several complete websites and web applications, and will have the skills to continue building your own projects.",
			},
		],
		"backend-development": [
			{
				question: "What programming languages will I learn in the Backend course?",
				answer:
					"The course focuses primarily on JavaScript with Node.js and Express for server-side development, along with MongoDB for database management.",
			},
			{
				question: "Will I learn about cloud deployment and DevOps?",
				answer:
					"Yes, we cover deployment to platforms like Heroku and Vercel, along with basic DevOps concepts and CI/CD workflows.",
			},
		],
		"fullstack-development": [
			{
				question: "Is the Full Stack course suitable for complete beginners?",
				answer:
					"Yes, the course is designed to take you from zero coding knowledge to being able to build complete web applications.",
			},
			{
				question: "How much time should I commit outside of class hours?",
				answer:
					"We recommend setting aside 10-15 hours per week for assignments and practice in addition to class time.",
			},
		],
		"ui-ux-design": [
			{
				question: "Do I need artistic skills to succeed in UI/UX design?",
				answer:
					"While artistic ability can be helpful, UI/UX design is more about problem-solving and understanding user needs. We'll teach you the design principles and tools you need.",
			},
			{
				question: "Will I need to purchase software licenses for design tools?",
				answer:
					"Most tools we use offer free trials or student licenses. We primarily use Figma, which has a generous free tier that's sufficient for the course.",
			},
		],
		"graphic-design": [
			{
				question: "Will I learn to use Adobe tools like Photoshop and Illustrator?",
				answer:
					"Yes, the course covers industry-standard tools including Adobe Photoshop, Illustrator, and InDesign.",
			},
			{
				question: "Will I have a portfolio by the end of the course?",
				answer:
					"Absolutely! You'll complete at least 5 projects during the course, which will form the foundation of your professional portfolio.",
			},
		],
	};

	// Combine common and course-specific FAQs
	const faqs = [...(courseFaqs[courseType as keyof typeof courseFaqs] || []), ...commonFaqs];

	return (
		<section className="py-16">
			<div className="max-ctn">
				<div className="flex items-end justify-between pb-15">
					<h2 className="text-2xl sm:text-3xl font-semibold text-darkBlue leading-snug">
						<span className="text-brandPurple">Frequent</span> <br />
						Querry
					</h2>

					<h2 className="text-2xl sm:text-3xl font-semibold text-darkBlue leading-snug text-right">
						Get <br />
						Insight
					</h2>
				</div>

				<div className="w-full">
					{faqs.map((faq, index) => (
						<FAQItem key={index} question={faq.question} answer={faq.answer} />
					))}
				</div>
			</div>
		</section>
	);
}

function FAQItem({ question, answer }: any) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mb-4 border-b border-gray-200 pb-3">
			<button
				className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700 py-2"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{question}</span>
				{isOpen ? (
					<ChevronUp size={30} className="text-brandPurple" />
				) : (
					<ChevronDown size={30} className="text-brandPurple" />
				)}
			</button>

			{isOpen && (
				<div className="mt-2 text-gray-400 pl-1 leading-relaxed">
					<p>{answer}</p>
				</div>
			)}
		</div>
	);
}
