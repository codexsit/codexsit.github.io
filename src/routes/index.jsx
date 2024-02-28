import Home from "../pages/Home";
import  Gallery  from "../pages/Gallery";
const routes = [
  {
    lable: "Gallery",
    path: "/gallery",
    requireAuth: false,
    render: <Gallery/>,
  },
  {
    lable: "Home",
    path: "/",
    requireAuth: false,
    render: <Home />,
  },
 
];

export default routes;
