import { useState } from "react";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="w-full customBlur bg-bg/50 fixed top-0 z-99999 inset-x-0">
			<nav className="max-ctn flex justify-between items-center py-4">
				{/* Logo */}
				<Link to="/">
					<img src={logo} alt="logo" width={120} className="max-sm:w-28" />
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-6 text-sm font-medium">
					{menuList.map(({ to, label }) => (
						<Link key={to} to={to}>
							{label}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-4">
					{/* Browse Courses Button */}
					<Link
						to="/courses"
						className="bg-brandPurple text-white px-4 max-sm:px-3 py-2 max-sm:py-1.5 max-sm:text-xs text-sm font-medium rounded-xs"
					>
						Browse Courses
					</Link>

					{/* Mobile Menu Button */}
					<AlignJustify className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} />
				</div>

				{/* Mobile Menu */}
				<div
					className={`fixed top-0 right-0 z-999999 h-screen flex-col justify-center bg-darkBlue2 p-10 transform transition-transform ${
						menuOpen ? "translate-x-0 flex" : "translate-x-full hidden"
					}`}
					onClick={() => setMenuOpen(false)}
				>
					<button className="absolute top-7 right-7 text-brandGreen" onClick={() => setMenuOpen(false)}>
						<X size={30} />
					</button>
					<div className="text-2xl text-white font-normal flex flex-col gap-14">
						{menuList.map(({ to, label }) => (
							<Link key={to} onClick={() => setMenuOpen(false)} to={to}>
								{label}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
}

const menuList = [
	{
		label: "Services",
		to: "/services",
	},
	{
		label: "About",
		to: "/about",
	},
	{
		label: "Pricing",
		to: "/pricing",
	},
	{
		label: "Contact",
		to: "/contact",
	},
];
