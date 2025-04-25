import AboutSec from "../components/AboutSec";
import Mission from "../components/Mission";
import SmallHero from "../components/SmallHero";
import StatsCounter from "../components/StatsCounter";
import WhyChooseUs from "../components/WhyChooseUs";
import { aboutHero } from "../utils/util";

export default function About() {
	return (
		<>
			<SmallHero title1={aboutHero.title1} title2={aboutHero.title2} subtitle={aboutHero.subtitle} />
			<StatsCounter />
			<WhyChooseUs />
			<AboutSec />
			<Mission />
		</>
	);
}
