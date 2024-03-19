import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";
import EventPage from "../pages/Events/EventPage";
const routes = [
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
