import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navcontener from "./landing_page/Navcontener";
import Home from "./landing_page/Home/Home";
import About from "./landing_page/About_page/About";
import Services from "./landing_page/Service/Services";
import Contact from "./landing_page/Contact_Page/Contact";
import AuthForm from "./landing_page/AuthForm/AuthForm";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import WorkExperience from "./landing_page/Work/WorkExperience";

function Layout() {
  const location = useLocation(); // Get the current path

  // Hide Navbar & Footer on NotFound page
  const isNotFound = location.pathname !== "/" && !["/home", "/about", "/services", "/contact", "/auth","/work"].includes(location.pathname);

  return (
    <>
      {!isNotFound && <Navcontener />} {/* Show Navbar only on valid pages */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/work" element={<WorkExperience />} /> {/* Work Experience page */}
        <Route path="*" element={<NotFound />} /> {/* Show NotFound for invalid paths */}
      </Routes>
      {!isNotFound && <Footer />} {/* Show Footer only on valid pages */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
