import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Divider from "../components/Divider";

function Profile() {
  const { state, dispatch } = useContext(ProfileContext);
  const [formData, setFormData] = useState(state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [name]: value.split(",").map((item) => item.trim()), // Splitting by comma and trimming
      },
    });
  };

  const handleNestedChange = (e, key) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [key]: { ...formData[key], [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.UPDATE_USER,
      payload: { user: formData },
    });

    dispatch({
      type: ACTIONS.SET_PROFILE_STATUS,
      payload: { isProfileUp: true },
    });
    // Add logic to save data using apiManager if required
  };

  // ... (You can define methods to handle array fields like musicGenre, interests, socialLinks)

  return (
    <Container>
      {state.isLoggedIn ? (
        <>
          <h1>Profile</h1>
          <Divider title={"Basic Information"}></Divider>
          <Form onSubmit={handleSubmit} className="m-4 ">
            {/* Basic Info */}
            <Card className="p-4 m-4">
              <Row>
                <Col md={6} sd={12}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="first"
                      value={formData.first}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="last"
                      value={formData.last}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min={18}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card>

            <Divider title={"Location"}></Divider>

            <Card className="p-4 m-4">
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formLocationCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.location.country}
                      onChange={(e) => handleNestedChange(e, "location")}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formLocationProvince">
                    <Form.Label>Province</Form.Label>
                    <Form.Control
                      type="text"
                      name="province"
                      value={formData.location.province}
                      onChange={(e) => handleNestedChange(e, "location")}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formLocationCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.location.city}
                      onChange={(e) => handleNestedChange(e, "location")}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formLocationPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.location.postalCode}
                      onChange={(e) => handleNestedChange(e, "location")}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card>

            <Divider title={"Car"}></Divider>

            <Card className="p-4 m-4">
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formCarModel">
                    <Form.Label>Car Model</Form.Label>
                    <Form.Control
                      type="text"
                      name="model"
                      value={formData.car.model}
                      onChange={(e) => handleNestedChange(e, "car")}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formCarPlate">
                    <Form.Label>Car Model</Form.Label>
                    <Form.Control
                      type="text"
                      name="plate"
                      value={formData.car.plate}
                      onChange={(e) => handleNestedChange(e, "car")}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card>

            <Divider title={"About me"}></Divider>

            <Card className="p-4 m4">
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formSpotifyPlaylistLink">
                    <Form.Label>Spotify Playlist Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="spotifyPlaylistLink"
                      value={formData.interests.spotifyPlaylistLink}
                      onChange={(e) => handleNestedChange(e, "interests")}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formOccupation">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      name="occupation"
                      value={formData.interests.occupation}
                      onChange={(e) => handleNestedChange(e, "interests")}
                    />
                  </Form.Group>
                </Col>

                {/* Example for adding a music genre */}
                <Col md={6}>
                  <Form.Group controlId="formMusicGenre">
                    <Form.Label>Music Genres</Form.Label>
                    <Form.Control
                      type="text"
                      name="musicGenre"
                      value={formData.interests.musicGenre.join(", ")}
                      onChange={handleArrayFieldChange}
                      placeholder="Enter genres separated by commas"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formInterests">
                    <Form.Label>Interests & Hobbies</Form.Label>
                    <Form.Control
                      type="text"
                      name="interests"
                      value={formData.interests.interests.join(", ")}
                      onChange={handleArrayFieldChange}
                      placeholder="Enter interests separated by commas"
                    />
                  </Form.Group>
                </Col>

                {/* Similar structure for other array fields like interests, socialLinks */}

                <Col md={12}>
                  <Form.Group controlId="formAbout">
                    <Form.Label>About</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="about"
                      value={formData.interests.about}
                      onChange={(e) => handleNestedChange(e, "interests")}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card>

            <Button
              onSubmit={handleSubmit}
              className="m-4"
              variant="primary"
              type="submit"
            >
              Save Changes
            </Button>
          </Form>
        </>
      ) : (
        <div>Please log in to set up profile</div>
      )}
    </Container>
  );
}

export default Profile;
