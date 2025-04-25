import CoursesFlat from "../components/CoursesFlat";
import SmallHero from "../components/SmallHero";
import WhyChooseUs from "../components/WhyChooseUs";
import { coursesHero } from "../utils/util";

export default function CoursesPage() {
	return (
		<>
			<SmallHero title1={coursesHero.title1} title2={coursesHero.title2} subtitle={coursesHero.subtitle} />
			<CoursesFlat />
			<WhyChooseUs />
		</>
	);
}
