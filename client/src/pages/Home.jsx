import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";
import { Container, Row, Col } from "react-bootstrap";

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
    <Container className="text-center">
      <Row className="">
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
    </Container>
  );
}

export default Home;
