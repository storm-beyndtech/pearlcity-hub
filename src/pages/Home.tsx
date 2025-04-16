import CoursePricing from "../components/CoursePricing";
import Courses from "../components/Courses";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Courses />
			<Map />
			<Features />
			<WhyChooseUs />
			<Reviews />
			<div className="py-10">
				<h2 className="max-ctn mb-5 text-center text-3xl font-semibold text-darkBlue">Pricing</h2>
				<CoursePricing />
			</div>
			<Newsletter />
			<Footer />
		</main>
	);
}
