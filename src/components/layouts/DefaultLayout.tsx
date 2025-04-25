import Navbar from "../Navbar";
import Footer from "../Footer";
import Newsletter from "../Newsletter";

interface LayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">{children}</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default DefaultLayout;
