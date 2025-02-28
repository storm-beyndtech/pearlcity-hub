import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services" element={<Services />} />
			<Route path="/about" element={<About />} />
			<Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<FAQ />} />
      
      <Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;
