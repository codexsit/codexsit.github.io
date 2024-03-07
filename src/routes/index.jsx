import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import About from "@/pages/About/index";

const routes = [
  {
    lable: "About",
    path: "/about-us",
    requireAuth: false,
    render: <About />,
  },
  {
    lable: "Teams",
    path: "/teams",
    requireAuth: false,
    render: <Teams />,
  },
  {
    lable: "Home",
    path: "/",
    requireAuth: false,
    render: <Home />,
  },
];

export default routes;
