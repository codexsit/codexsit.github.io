import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "@/routes/index";
import Navbar from "@/components/Navbar/index";
import Cursor from "./components/Cursor";
import CursorVariantProvider from "@/context/CursorVariantProvider";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/ScrollToTop";

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Our Team", path: "/teams" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Contact Us", path: "/contact" },
];

function App() {
  const [loading, setLoading] = useState(true);

  // Function to be called when the loader finishes
  const handleLoadComplete = () => {
    setLoading(false); // Set loading to false once the loader is done
  };

  return (
    <CursorVariantProvider>
      <AnimatePresence>
        {loading ? (
          <Loader onLoadComplete={handleLoadComplete} />
        ) : (
          <Router>
            <Navbar links={navLinks} />
            <Cursor />
            <ToastContainer />
            <ScrollToTop />
            <Routes>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  element={route.render}
                  key={route.label}
                />
              ))}
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </CursorVariantProvider>
  );
}

export default App;
