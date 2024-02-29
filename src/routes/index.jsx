import Home from "@/pages/Home/index";
import Teams from "@/pages/Teams/index";

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
];

export default routes;
