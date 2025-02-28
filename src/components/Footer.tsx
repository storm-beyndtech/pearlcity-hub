import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

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
				<div className="flex items-center gap-4"></div>
			</footer>

			<div className="max-ctn py-6">
				<p className="mx-auto"></p>
			</div>
		</>
	);
}

const menuList = [
	{
		label: "Services",
		to: "services",
	},
	{
		label: "Faq",
		to: "faq",
	},
	{
		label: "Pricing",
		to: "pricing",
	},
];
