import Courses from "../components/Courses";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Courses />
			<Map />
			<Features />
			<WhyChooseUs />
			<Newsletter />
			<Footer />
		</div>
	);
}
