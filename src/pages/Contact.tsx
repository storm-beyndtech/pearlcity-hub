import ContactForm from "../components/ContactUs";
import SmallHero from "../components/SmallHero";
import { contactHero } from "../utils/util";

export default function Contact() {
	return (
		<>
			<SmallHero title1={contactHero.title1} title2={contactHero.title2} subtitle={contactHero.subtitle} />
			<ContactForm />
		</>
	);
}
