import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Root from "./pages/Root";

const routes = [
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/create-account", element: <CreateAccount></CreateAccount> },
    ],
  },
  ,
];

const router = createBrowserRouter(routes);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
