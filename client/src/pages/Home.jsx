import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";
import { Container, Row } from "react-bootstrap";

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
    <Container>
      <div className="home">
        <div>
          test email : {state.user.email} & country :
          {state.user.location.country} & province:{" "}
          {state.user.location.province} & logged? {state.isLoggedIn.toString()}
        </div>
        <div onClick={testfunc} style={{ backgroundColor: "red" }}>
          button
        </div>
      </div>
    </Container>
  );
}

export default Home;
