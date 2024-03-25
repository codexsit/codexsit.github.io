import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import About from "@/pages/About/index";
import Gallery from "@/pages/Gallery/Gallery";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  {
    lable: "Gallery",
    path: "/gallery",
    requireAuth: false,
    render: <Gallery />,
  },
  {
    lable: "About",
    path: "/about-us",
    requireAuth: false,
    render: <About />,
  },
  {
    label: "Teams",
    path: "/teams",
    requireAuth: false,
    render: <Teams />,
  },
  {
    label: "Home",
    path: "/",
    requireAuth: false,
    render: <Home />,
  },
  {
    label: "Page Not Found",
    path: "/*",
    requireAuth: false,
    render: <PageNotFound />,
  },
];

export default routes;
