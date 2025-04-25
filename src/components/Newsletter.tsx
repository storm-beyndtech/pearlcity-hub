import { useState } from "react";
import topCurve from "../assets/icons/green-curve.svg";
import bottomCurve from "../assets/icons/purple-curve.svg";
import Alert from "./ui/Alert";
import { Loader } from "lucide-react";

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// Reset states
		setError("");
		setSuccess("");

		// Basic email validation
		if (!email || !email.includes("@") || !email.includes(".")) {
			setError("Please enter a valid email address");
			return;
		}

		setLoading(true);

		try {
			const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
			const res = await fetch(`${url}/newsletter-sub`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || "Failed to subscribe");
			}

			setSuccess("Thank you for subscribing!");
			setEmail("");
		} catch (err: any) {
			setError(err.message || "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-ctn">
			<div className="w-full relative overflow-hidden bg-darkBlue2 rounded-2xl py-16 px-4 grid place-content-center gap-10">
				<h2 className="text-4xl font-bold text-white text-center">Subscribe for Updates</h2>

				<form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
					<div className="flex max-sm:flex-col justify-center gap-4 w-full">
						<input
							placeholder="Enter Your Email"
							className="px-5 py-3 rounded-lg border border-brandPurple 
							focus:border-brandGreen outline-none placeholder:text-gray-600"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							disabled={loading}
						/>
						<button
							type="submit"
							className="bg-brandGreen text-black px-7 max-sm:px-5 py-3 font-semibold rounded-lg flex items-center justify-center"
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader size={18} className="animate-spin mr-2" />
									<span className="ml-2">Subscribing...</span>
								</>
							) : (
								"Subscribe Now"
							)}
						</button>
					</div>
				</form>
				{error && <Alert type="error" message={error} />}
				{success && <Alert type="success" message={success} />}

				{/* Floating Curves */}
				<div className="absolute top-0 left-0">
					<img src={topCurve} alt="curve" className="max-sm:w-20" />
				</div>

				<div className="absolute bottom-0 right-0">
					<img src={bottomCurve} alt="curve" className="max-sm:w-20" />
				</div>
			</div>
		</div>
	);
}
