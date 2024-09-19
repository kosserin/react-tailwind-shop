import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/o-nama",
    element: <About />,
  },
  {
    path: "/prodavnica",
    element: <Store />,
  },
]);

const App = () => (
  <div className="bg-dark min-h-screen">
    <RouterProvider router={router} />
  </div>
);
export default App;
