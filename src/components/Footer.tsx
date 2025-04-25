import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	return (
		<>
			<footer className="max-ctn flex justify-between items-center py-10">
				{/* Logo */}
				<Link to="/">
					<img src={logo} alt="logo" width={120} className="max-sm:w-28" />
				</Link>

				{/* Menu */}
				<div className="hidden md:flex space-x-6 text-sm font-medium">
					{menuList.map(({ to, label }) => (
						<Link key={to} to={to}>
							{label}
						</Link>
					))}
				</div>

				{/* Socials */}
				<div className="flex items-center gap-4">
					<a href="https://www.instagram.com/pearlcity_hub/" target="_blank" className="social-icon">
						<FaInstagram className="text-base" />
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=61570301254562"
						target="_blank"
						className="social-icon"
					>
						<FaFacebookF className="text-base" />
					</a>
					<a href="https://www.linkedin.com/company/pearlcity-hub/" target="_blank" className="social-icon">
						<FaLinkedinIn className="text-base" />
					</a>
					<a
						href="https://x.com/PearlcityH20366?t=B4-Tri6Eod0FTeabU58rnQ&s=09"
						target="_blank"
						className="social-icon"
					>
						<FaXTwitter className="text-base" />
					</a>
				</div>
			</footer>

			<div className="max-ctn pt-6 pb-3 border-t border-gray-200">
				<p className="text-center text-xs text-gray-400">
					© Copyright 2025, All Rights Reserved by Pearlcity Hub
				</p>
			</div>
		</>
	);
}

const menuList = [
	{
		label: "Services",
		to: "/services",
	},
	{
		label: "Pricing",
		to: "/pricing",
	},
];
