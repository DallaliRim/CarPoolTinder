import React, { useReducer } from "react";
import reducer from "../reducers/reducer";
import { apiManager } from "../assets/js/api";

export const ProfileContext = React.createContext();

function ProfileContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    user: {
      age: 0,
      email: "none",
      first: "none",
      last: "none",
      profilePicLink: "none",
      gender: "none",
      location: {
        country: "none",
        province: "none",
        city: "none",
        postalCode: "none",
      },
      car: { modal: "none", plate: "none" },
      preferences: {
        gender: "none",
        radius: 0,
        hasCar: false,
        ageMin: 0,
        ageMax: 0,
      },
      interests: {
        musicGenre: [],
        spotifyPlalistLink: "none",
        occupation: "none",
        interests: [],
        socialLinks: [],
        about: "none",
      },
    },
  });

  return (
    <ProfileContext.Provider value={{ state, dispatch, apiManager }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
