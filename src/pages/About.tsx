import AboutSec from "../components/AboutSec";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SmallHero from "../components/SmallHero";
import StatsCounter from "../components/StatsCounter";
import WhyChooseUs from "../components/WhyChooseUs";
import { aboutHero } from "../utils/util";

export default function About() {
	return (
		<main>
			<Navbar />
			<SmallHero title1={aboutHero.title1} title2={aboutHero.title2} subtitle={aboutHero.subtitle} />
			<StatsCounter />
			<WhyChooseUs />
			<AboutSec />
			<Mission />
			<Newsletter />
			<Footer />
		</main>
	);
}
