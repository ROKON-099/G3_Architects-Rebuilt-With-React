import { createBrowserRouter } from "react-router";


import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Mainlayout from "../Layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;