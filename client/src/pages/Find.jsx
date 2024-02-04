import { useContext, useEffect, useState } from "react";

import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";

import { Container, Row } from "react-bootstrap";
import { apiManager } from "../assets/js/api";

function Find() {
  const { state, dispatch } = useContext(ProfileContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log(state);
    (async () => {
      if (state.isLoggedIn & state.isProfileUp) {
        // fetch users to dipslay
        const newUsers = await apiManager.fetchSuitableUsers();
        console.log(newUsers)
        setUsers(newUsers.body)
      }
    })()
  }, [state]);

  return (
    <Container>
      {state.isLoggedIn & state.isProfileUp ? (
        users.map((user, i) => {
          console.log(user);
          return (
            <div key={i}> {user.first} </div>
          )
        })
      )
        :
        (
          <div>Please set a profile up to start finding a car bud!</div>
        )}
    </Container>
  );
}

export default Find;
