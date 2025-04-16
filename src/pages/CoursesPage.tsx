import CoursesFlat from "../components/CoursesFlat";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SmallHero from "../components/SmallHero";
import WhyChooseUs from "../components/WhyChooseUs";
import { coursesHero } from "../utils/util";

export default function CoursesPage() {
	return (
		<div>
			<Navbar />
			<SmallHero title1={coursesHero.title1} title2={coursesHero.title2} subtitle={coursesHero.subtitle} />
			<CoursesFlat />
			<WhyChooseUs />
			<Newsletter />
			<Footer />
		</div>
	);
}
