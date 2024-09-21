import { createBrowserRouter } from "react-router-dom";
import SignUp from "./../pages/signup/SignUp";
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
