import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Pricing from "./pages/Pricing";
// import FAQ from "./pages/FAQ";
// import About from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services" element={<Home />} />
			<Route path="/about" element={<Home />} />
			<Route path="/pricing" element={<Home />} />
			<Route path="/faq" element={<Home />} />

			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;
