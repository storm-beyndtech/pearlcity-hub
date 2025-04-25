import CoursePricing from "../components/CoursePricing";
import SmallHero from "../components/SmallHero";
import WhyChooseUs from "../components/WhyChooseUs";
import { pricingHero } from "../utils/util";

export default function Pricing() {
	return (
		<>
			<SmallHero title1={pricingHero.title1} title2={pricingHero.title2} subtitle={pricingHero.subtitle} />
			<CoursePricing />
			<WhyChooseUs />
		</>
	);
}
