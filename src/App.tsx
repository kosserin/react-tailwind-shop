import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import ItemDetails from "./components/ItemDetails";
import { OrderProvider } from "./OrderContext";
import ItemsPreview from "./components/ItemsPreview";

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
  {
    path: "/prodavnica/detalji/:id",
    element: <ItemDetails />,
  },
  {
    path: "/pregled-artikala",
    element: <ItemsPreview />,
  },
]);

const App = () => (
  <OrderProvider>
    <div className="bg-dark min-h-screen">
      <RouterProvider router={router} />
    </div>
  </OrderProvider>
);
export default App;
