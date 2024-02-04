// import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
// import ProfileContexteProvider from "../contexts/ProfileContexteProvider";

function Root() {
  return (
    <div className="App">
      <NavBar />
      <Outlet className="content"></Outlet>
    </div>
  );
}

export default Root;
