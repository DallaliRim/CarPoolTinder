import React, { useContext, useEffect, useState } from "react";

import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";

import { Container, Row } from "react-bootstrap";

function Find() {
  const { state, dispatch } = useContext(ProfileContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    if (state.isLoggedIn & state.isProfileUp) {
      // fetch users to dipslay
    }
  }, []);

  return (
    <Container>
      {state.isLoggedIn & state.isProfileUp ? (
        <Row>
          <div>Find buddy page</div>
        </Row>
      ) : (
        <div>Please set a profile up to start finding a car bud!</div>
      )}
    </Container>
  );
}

export default Find;
