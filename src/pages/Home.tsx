import CoursePricing from "../components/CoursePricing";
import Courses from "../components/Courses";
import FAQSection from "../components/FAQSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
	return (
		<>
			<Hero />
			<Courses />
			<Map />
			<Features />
			<WhyChooseUs />
			<Reviews />
			<div className="py-10">
				<h2 className="max-ctn mb-5 text-center text-3xl font-semibold text-darkBlue">Pricing</h2>
				<CoursePricing />
			</div>
      <FAQSection />
		</>
	);
}
