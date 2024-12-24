import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import About from "@/pages/About/index";
import Gallery from "@/pages/Gallery/Gallery";
import Contact from "@/pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Loader from "@/components/Loader";
import WebsiteTeam from "../components/WebsiteTeam";

const routes = [
  {
    label: "Website Team",
    path: "/website-team",
    requireAuth: false,
    render: <WebsiteTeam />,
  },
  {
    label: "Loader",
    path: "/loader",
    requireAuth: false,
    render: <Loader />,
  },
  {
    label: "Contact",
    path: "/contact",
    requireAuth: false,
    render: <Contact />,
  },
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
    label: "Page Not Found",
    path: "/*",
    requireAuth: false,
    render: <PageNotFound />,
  },
];

export default routes;
