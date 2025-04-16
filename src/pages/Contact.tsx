import ContactForm from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SmallHero from "../components/SmallHero";
import { contactHero } from "../utils/util";

export default function Contact() {
	return (
		<div>
			<Navbar />
			<SmallHero title1={contactHero.title1} title2={contactHero.title2} subtitle={contactHero.subtitle} />
			<ContactForm />
			<Footer />
		</div>
	);
}
