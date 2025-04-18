import CoursePricing from "../components/CoursePricing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SmallHero from "../components/SmallHero";
import WhyChooseUs from "../components/WhyChooseUs";
import { pricingHero } from "../utils/util";

export default function Pricing() {
	return (
		<div>
			<Navbar />
			<SmallHero title1={pricingHero.title1} title2={pricingHero.title2} subtitle={pricingHero.subtitle} />
			<CoursePricing />
			<WhyChooseUs />
			<Newsletter />
			<Footer />
		</div>
	);
}
