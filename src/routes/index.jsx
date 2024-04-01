import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import Events from "@/pages/Events/index";
import About from "@/pages/About/index";
import Gallery from "@/pages/Gallery/Gallery";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  {
    label: "Gallery",
    path: "/gallery",
    requireAuth: false,
    render: <Gallery />,
  },
  {
    label: "About",
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
    label: "Events",
    path: "/events",
    requireAuth: false,
    render: <Events />,
    },
    {  
    label: "Page Not Found",
    path: "/*",
    requireAuth: false,
    render: <PageNotFound />,
  },
];

export default routes;
