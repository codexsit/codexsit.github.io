import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import About from "@/pages/About/index";
import Loader from "@/components/Loader/index";

const routes = [
  {
    lable: "Loader",
    path: "/loader",
    requireAuth: false,
    render: <Loader />,
  },
  {
    lable: "About",
    path: "/about",
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
