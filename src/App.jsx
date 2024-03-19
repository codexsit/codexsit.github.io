import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "@/routes/index";
import Navbar from "@/components/Navbar/index";

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Our Team", path: "/teams" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" },
];

function App() {
  return (
    <Router>
      <Navbar links={navLinks} />

      <ToastContainer />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.render} key={route.lable} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
