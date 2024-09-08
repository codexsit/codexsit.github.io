import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "@/routes/index";
import Navbar from "@/components/Navbar/index";
import Cursor from "./components/Cursor";
import CursorVariantProvider from "@/context/CursorVariantProvider";

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Our Team", path: "/teams" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
  { name: "Community", path: "/community" },
];

function App() {
  return (
    <CursorVariantProvider>
      <AnimatePresence>
        <Router>
          <Navbar links={navLinks} />
          <Cursor />

          <ToastContainer />
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
      </AnimatePresence>
    </CursorVariantProvider>
  );
}

export default App;
