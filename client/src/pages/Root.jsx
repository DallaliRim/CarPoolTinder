// import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation.jsx";

function Root() {
  return (
    <div className="App">
      <NavBar />
      <Outlet className="content"></Outlet>
    </div>
  );
}

export default Root;
