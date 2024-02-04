import React, { useContext } from "react";

import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";

import { Container } from "react-bootstrap";

function Find() {
  const { state, dispatch } = useContext(ProfileContext);

  return (
    <Container>
      {state.isLoggedIn ? (
        <div>Find buddy page</div>
      ) : (
        <div>
          Please login and have a profile set up to start finding a car bud!
        </div>
      )}
    </Container>
  );
}

export default Find;
