import ServicesSection from "../components/ServicesSection";
import SmallHero from "../components/SmallHero";
import { serviceHero } from "../utils/util";

export default function Services() {
	return (
		<>
			<SmallHero title1={serviceHero.title1} title2={serviceHero.title2} subtitle={serviceHero.subtitle} />
			<ServicesSection />
		</>
	);
}
