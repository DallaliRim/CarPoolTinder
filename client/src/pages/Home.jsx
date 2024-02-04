import { NavLink } from "react-router-dom";
import "./home.css";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";

function Home() {
  const { state, dispatch } = useContext(ProfileContext);

  const testfunc = () => {
    dispatch({
      type: ACTIONS.UPDATE_USER,
      payload: {
        user: {
          email: "newemail@example.com",
          location: {
            country: "New Country",
          },
        },
      },
    });
  };

  return (
    <div className="home">
      <p>
        {console.log(state)}
        <li>
          <NavLink className="navlink" to="/create-account">
            Create Accounts
          </NavLink>
        </li>{" "}
      </p>
      <div>
        test email : {state.user.email} & country :{state.user.location.country}{" "}
        & province: {state.user.location.province}
      </div>
      <div onClick={testfunc} style={{ backgroundColor: "red" }}>
        button
      </div>
    </div>
  );
}

export default Home;
