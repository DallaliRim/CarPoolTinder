import React, { useReducer } from "react";
import reducer from "../reducers/reducer";
import { apiManager } from "../assets/js/api";
import { DEFAULT_USER } from "../assets/js/consts";

export const ProfileContext = React.createContext();

function ProfileContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_USER);

  return (
    <ProfileContext.Provider value={{ state, dispatch, apiManager }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
