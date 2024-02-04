import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import ProfileContextProvider from "./contexts/ProfileContexteProvider";

const routes = [
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/create-account", element: <CreateAccount></CreateAccount> },
      { path: "/profile", element: <Profile></Profile> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ProfileContextProvider>
      <RouterProvider router={router}></RouterProvider>;
    </ProfileContextProvider>
  );
}

export default App;
