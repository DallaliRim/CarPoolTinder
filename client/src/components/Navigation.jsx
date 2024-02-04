import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";

function Navigation() {
  const { state, dispatch } = useContext(ProfileContext);

  const tempLogin = () => {
    dispatch({
      type: ACTIONS.SET_LOGIN_STATUS,
      payload: {
        isLoggedIn: true,
      },
    });
  };

  const onLogoutHandler = () => {
    dispatch({
      type: ACTIONS.CLEAR_USER,
    });
  };

  console.log(state);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Car Bud!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/find">
              Find
            </Nav.Link>

            <Nav.Link as={NavLink} to="/profile">
              Profile
            </Nav.Link>

            {state.isLoggedIn ? (
              <Nav.Link onClick={onLogoutHandler} as={NavLink} to="/">
                Logout
              </Nav.Link>
            ) : (
              // temporary login
              <Nav.Link
                onClick={tempLogin}
                as={NavLink}
                to={state.isProfileUp ? "/find" : "/profile"}
              >
                Login
              </Nav.Link>
              // <Nav.Link as={NavLink} to="/login">
              //   Login
              // </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
