import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="root-layout">
      <header>
        <ul>
          <li>
            <div>NAVBAR</div>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/create-account">createaccount</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Root;
