import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CoursesPage from "./pages/CoursesPage";
import Pricing from "./pages/Pricing";
import CourseDetails from "./pages/Course";
import Register from "./pages/Register";
import DefaultLayout from "./components/layouts/DefaultLayout";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
	return (
		<DefaultLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<About />} />
				<Route path="/courses" element={<CoursesPage />} />
				<Route path="/courses/:courseName" element={<CourseDetails />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
				<Route path="/register" element={<Register />} />

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</DefaultLayout>
	);
}

export default App;
