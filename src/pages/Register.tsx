import CourseRegistrationForm from "../components/CourseRegistrationForm";
import SmallHero from "../components/SmallHero";
import { registerHero } from "../utils/util";

export default function Register() {
	return (
		<>
			<SmallHero title1={registerHero.title1} title2={registerHero.title2} subtitle={registerHero.subtitle} />
			<CourseRegistrationForm />
		</>
	);
}
