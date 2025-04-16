import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CoursesPage from "./pages/CoursesPage";
import Pricing from "./pages/Pricing";
// import Pricing from "./pages/Pricing";
// import FAQ from "./pages/FAQ";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services" element={<Services />} />
			<Route path="/about" element={<About />} />
			<Route path="/courses" element={<CoursesPage />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/pricing" element={<Pricing />} />
			<Route path="/faq" element={<Home />} />

			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;
