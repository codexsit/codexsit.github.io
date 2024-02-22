import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes/index";

function App() {
  return (
    <Router>
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
