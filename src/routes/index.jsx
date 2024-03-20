import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import EventPage from "../pages/Events/index";
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
  {
    lable:"Events",
    path: "/events",
    requireAuth: false,
    render: <EventPage />,
  }
];

export default routes;
