import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import ProfileContextProvider from "./contexts/ProfileContexteProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Find from "./pages/Find";

const routes = [
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/profile", element: <Profile></Profile> },
      { path: "/find", element: <Find></Find> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ProfileContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProfileContextProvider>
  );
}

export default App;
