import { createBrowserRouter } from "react-router-dom";
import SignUp from "./../pages/signup/SignUp";
import ErrorPage from "../pages/error/ErrorPage";
import Blogs from "../pages/blogs/Blogs";
import App from "../App";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
