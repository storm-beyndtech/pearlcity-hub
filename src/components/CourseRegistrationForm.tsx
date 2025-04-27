import { useState, ChangeEvent, FormEvent } from "react";
import { ChevronDown, Check, AlertCircle, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Alert from "./ui/Alert";

// Define types and interfaces
interface Course {
	id: string;
	name: string;
}

interface FormData {
	fullName: string;
	email: string;
	phone: string;
	courseId: string;
	experience: string;
	laptop: string;
	about: string;
	hearAbout: string[];
	paymentOption: "full" | "installment";
	agreeToTerms: boolean;
}

interface FormErrors {
	[key: string]: string | null;
}

export default function CourseRegistrationForm() {
	const initialFormData: FormData = {
		fullName: "",
		email: "",
		phone: "",
		courseId: "",
		experience: "",
		laptop: "",
		about: "",
		hearAbout: [],
		paymentOption: "full",
		agreeToTerms: false,
	};
	const [formData, setFormData] = useState<FormData>(initialFormData);

	const [errors, setErrors] = useState<FormErrors>({});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [step, setStep] = useState<number>(1);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const courses: Course[] = [
		{ id: "frontend-development", name: "Frontend Development" },
		{ id: "backend-development", name: "Backend Development" },
		{ id: "fullstack-development", name: "Full Stack Development" },
		{ id: "cloud-fundamentals", name: "Cloud Fundamentals" },
		{ id: "ui-ux-design", name: "UI/UX Design" },
		{ id: "graphic-design", name: "Graphic Design" },
	];

	const hearAboutOptions: string[] = [
		"Social Media",
		"Friend/Colleague",
		"Search Engine",
		"Blog/Article",
		"Event",
	];

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		if (type === "checkbox") {
			if (name === "agreeToTerms") {
				setFormData({ ...formData, [name]: checked });
			} else if (name.startsWith("hearAbout-")) {
				const option = name.split("-")[1];
				setFormData({
					...formData,
					hearAbout: checked
						? [...formData.hearAbout, option]
						: formData.hearAbout.filter((item) => item !== option),
				});
			}
		} else {
			setFormData({ ...formData, [name]: value });
		}

		// Clear error when field is edited
		if (errors[name]) {
			setErrors({ ...errors, [name]: null });
		}
	};

	const validateStep = (stepNumber: number): boolean => {
		let stepErrors: FormErrors = {};

		if (stepNumber === 1) {
			if (!formData.fullName.trim()) stepErrors.fullName = "Name is required";
			if (!formData.email.trim()) {
				stepErrors.email = "Email is required";
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
				stepErrors.email = "Please enter a valid email address";
			}
			if (!formData.phone.trim()) {
				stepErrors.phone = "Phone number is required";
			} else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
				stepErrors.phone = "Please enter a valid phone number";
			}
			if (!formData.courseId) stepErrors.courseId = "Please select a course";
		}

		if (stepNumber === 2) {
			if (!formData.experience) stepErrors.experience = "Please select your experience level";
			if (!formData.laptop) stepErrors.laptop = "Please indicate if you have a laptop";
			if (!formData.about.trim()) stepErrors.about = "Please tell us about yourself";
		}

		if (stepNumber === 3) {
			if (!formData.agreeToTerms) stepErrors.agreeToTerms = "You must agree to the terms and conditions";
		}

		setErrors(stepErrors);
		return Object.keys(stepErrors).length === 0;
	};

	const nextStep = (): void => {
		if (validateStep(step)) {
			setStep(step + 1);
			window.scrollTo(0, 0);
		}
	};

	const prevStep = (): void => {
		setStep(step - 1);
		window.scrollTo(0, 0);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSuccess("");
		setError("");

		if (validateStep(step)) {
			setIsSubmitting(true);

			try {
				const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
				const res = await fetch(`${url}/register-course`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				});

				const data = await res.json();

				// Handle non-OK responses
				if (!res.ok) {
					throw new Error(data.message || "An error occurred");
				}
				setSuccess(data.message);
				setFormData(initialFormData);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setIsSubmitting(false);
				setTimeout(() => {
					setStep(1);
					setSuccess("");
					setError("");
				}, 3000);
			}
		}
	};

	return (
		<div className="max-w-3xl mx-auto mb-40 sm:-mt-10 -mt-20 p-6 md:p-8 bg-white/60 rounded-lg shadow-xl">
			<div className="mb-8">
				<div className="relative flex items-center justify-between mt-6 mb-2">
					{[1, 2, 3].map((item) => (
						<div key={item} className="flex flex-col items-center">
							<div
								className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
									step === item
										? "bg-brandPurple border-brandPurple text-white"
										: step > item
										? "bg-brandGreen2 border-brandGreen2 text-white"
										: "border-gray-300 text-gray-500"
								}`}
							>
								{step > item ? <Check size={16} /> : item}
							</div>
							<span className="text-xs mt-1 text-gray-500">
								{item === 1 ? "Basic Info" : item === 2 ? "Details" : "Review"}
							</span>
						</div>
					))}
					<div
						className="hidden md:block h-1 bg-gray-200 absolute -z-10 w-[86%] left-1/2 transform -translate-x-1/2"
						style={{ top: "29%" }}
					/>
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				{step === 1 && (
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								className={`w-full px-4 py-3 rounded-lg border ${
									errors.fullName ? "border-red-500" : "border-gray-300"
								} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
								placeholder="Enter your full name"
							/>
							{errors.fullName && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.fullName}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className={`w-full px-4 py-3 rounded-lg border ${
									errors.email ? "border-red-500" : "border-gray-300"
								} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
								placeholder="your@email.com"
							/>
							{errors.email && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.email}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className={`w-full px-4 py-3 rounded-lg border ${
									errors.phone ? "border-red-500" : "border-gray-300"
								} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
								placeholder="+1 (123) 456-7890"
							/>
							{errors.phone && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.phone}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="courseId">
								Select Course
							</label>
							<div className="relative">
								<select
									id="courseId"
									name="courseId"
									value={formData.courseId}
									onChange={handleChange}
									className={`w-full px-4 py-3 rounded-lg border ${
										errors.courseId ? "border-red-500" : "border-gray-300"
									} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none`}
								>
									<option value="">Choose a course</option>
									{courses.map((course) => (
										<option key={course.id} value={course.id}>
											{course.name}
										</option>
									))}
								</select>
								<ChevronDown
									size={20}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
								/>
							</div>
							{errors.courseId && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.courseId}
								</p>
							)}
						</div>

						<div className="pt-4">
							<button
								type="button"
								onClick={nextStep}
								className="w-full px-6 py-3 bg-brandPurple text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Continue
							</button>
						</div>
					</div>
				)}

				{step === 2 && (
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
								{["Beginner", "Intermediate", "Advanced"].map((level) => (
									<div key={level}>
										<label
											className={`flex p-3 border rounded-lg cursor-pointer transition-all ${
												formData.experience === level
													? "border-blue-500 bg-blue-50 text-blue-700"
													: "border-gray-300 hover:border-gray-400"
											}`}
										>
											<input
												type="radio"
												name="experience"
												value={level}
												checked={formData.experience === level}
												onChange={handleChange}
												className="sr-only"
											/>
											<span className="flex items-center justify-center w-5 h-5 border rounded-full mr-2 transition-all">
												{formData.experience === level && (
													<span className="w-2.5 h-2.5 bg-brandPurple rounded-full" />
												)}
											</span>
											<span>{level}</span>
										</label>
									</div>
								))}
							</div>
							{errors.experience && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.experience}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Do you have a laptop?</label>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{["Yes", "No"].map((option) => (
									<div key={option}>
										<label
											className={`flex p-3 border rounded-lg cursor-pointer transition-all ${
												formData.laptop === option
													? "border-blue-500 bg-blue-50 text-blue-700"
													: "border-gray-300 hover:border-gray-400"
											}`}
										>
											<input
												type="radio"
												name="laptop"
												value={option}
												checked={formData.laptop === option}
												onChange={handleChange}
												className="sr-only"
											/>
											<span className="flex items-center justify-center w-5 h-5 border rounded-full mr-2 transition-all">
												{formData.laptop === option && (
													<span className="w-2.5 h-2.5 bg-brandPurple rounded-full" />
												)}
											</span>
											<span>{option}</span>
										</label>
									</div>
								))}
							</div>
							{errors.laptop && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.laptop}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="about">
								Tell us about yourself
							</label>
							<textarea
								id="about"
								name="about"
								value={formData.about}
								onChange={handleChange}
								rows={4}
								className={`w-full px-4 py-3 rounded-lg border ${
									errors.about ? "border-red-500" : "border-gray-300"
								} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
								placeholder="Share your background, goals, and what you hope to achieve from this course..."
							/>
							{errors.about && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.about}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								How did you hear about us?
							</label>
							<div className="space-y-2">
								{hearAboutOptions.map((option) => (
									<label key={option} className="flex items-center">
										<input
											type="checkbox"
											name={`hearAbout-${option}`}
											checked={formData.hearAbout.includes(option)}
											onChange={handleChange}
											className="w-4 h-4 text-brandPurple border-gray-300 rounded focus:ring-blue-500"
										/>
										<span className="ml-2 text-gray-700">{option}</span>
									</label>
								))}
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 pt-4">
							<button
								type="button"
								onClick={prevStep}
								className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>
								Back
							</button>
							<button
								type="button"
								onClick={nextStep}
								className="px-6 py-3 bg-brandPurple text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Continue
							</button>
						</div>
					</div>
				)}

				{step === 3 && (
					<div className="space-y-6">
						<div className="bg-gray-50 p-4 rounded-lg">
							<h3 className="text-lg font-medium text-gray-800 mb-3">Registration Summary</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
								<div>
									<p className="text-sm text-gray-500">Full Name</p>
									<p className="font-medium">{formData.fullName}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Email Address</p>
									<p className="font-medium">{formData.email}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Phone Number</p>
									<p className="font-medium">{formData.phone}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Selected Course</p>
									<p className="font-medium">
										{courses.find((c) => c.id === formData.courseId)?.name || "None selected"}
									</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Experience Level</p>
									<p className="font-medium">{formData.experience}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Has Laptop</p>
									<p className="font-medium">{formData.laptop}</p>
								</div>
							</div>
						</div>

						<div>
							<label className="text-base font-medium text-gray-700 mb-2">Payment Option</label>
							<div className="mt-2 space-y-3">
								<label
									className={`flex p-4 border rounded-lg cursor-pointer transition-all ${
										formData.paymentOption === "full"
											? "border-blue-500 bg-blue-50"
											: "border-gray-300 hover:border-gray-400"
									}`}
								>
									<input
										type="radio"
										name="paymentOption"
										value="full"
										checked={formData.paymentOption === "full"}
										onChange={handleChange}
										className="sr-only"
									/>
									<span className="flex items-center justify-center w-5 h-5 border rounded-full mr-3 transition-all">
										{formData.paymentOption === "full" && (
											<span className="w-2.5 h-2.5 bg-brandPurple rounded-full" />
										)}
									</span>
									<div>
										<p className="font-medium text-gray-900">Full Payment</p>
										<p className="text-sm text-gray-500">Pay the full amount upfront and get 10% discount</p>
									</div>
								</label>

								<label
									className={`flex p-4 border rounded-lg cursor-pointer transition-all ${
										formData.paymentOption === "installment"
											? "border-blue-500 bg-blue-50"
											: "border-gray-300 hover:border-gray-400"
									}`}
								>
									<input
										type="radio"
										name="paymentOption"
										value="installment"
										checked={formData.paymentOption === "installment"}
										onChange={handleChange}
										className="sr-only"
									/>
									<span className="flex items-center justify-center w-5 h-5 border rounded-full mr-3 transition-all">
										{formData.paymentOption === "installment" && (
											<span className="w-2.5 h-2.5 bg-brandPurple rounded-full" />
										)}
									</span>
									<div>
										<p className="font-medium text-gray-900">Installment Plan</p>
										<p className="text-sm text-gray-500">Pay in 3 equal monthly installments</p>
									</div>
								</label>
							</div>
						</div>

						<div className="pt-4">
							<label className="flex items-start">
								<input
									type="checkbox"
									name="agreeToTerms"
									checked={formData.agreeToTerms}
									onChange={handleChange}
									className={`mt-1 w-4 h-4 text-brandPurple border-gray-300 rounded focus:ring-blue-500 ${
										errors.agreeToTerms ? "border-red-500" : ""
									}`}
								/>
								<span className="ml-2 text-gray-700 text-sm">
									I agree to the{" "}
									<Link to="/terms-and-conditions" className="text-brandPurple hover:underline">
										Terms of Service
									</Link>{" "}
									and{" "}
									<Link to="/terms-and-conditions" className="text-brandPurple hover:underline">
										Privacy Policy
									</Link>
									. I understand that my personal data will be processed as described in the Privacy Policy.
								</span>
							</label>
							{errors.agreeToTerms && (
								<p className="mt-1 text-sm text-red-600 flex items-center">
									<AlertCircle size={14} className="mr-1" />
									{errors.agreeToTerms}
								</p>
							)}
						</div>

						{/* Alert Messages */}
						{success && <Alert type="success" message={success} />}
						{error && <Alert type="error" message={error} />}

						<div className="flex flex-col sm:flex-row gap-3 pt-4">
							<button
								type="button"
								onClick={prevStep}
								className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>
								Back
							</button>
							<button
								type="submit"
								disabled={isSubmitting}
								className="flex-1 px-6 py-3 bg-brandPurple text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 flex justify-center items-center"
							>
								{isSubmitting ? (
									<>
										<Loader size={18} className="animate-spin mr-2" />
										Processing...
									</>
								) : (
									"Complete Registration"
								)}
							</button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}
