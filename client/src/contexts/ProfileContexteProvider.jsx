import React, { useReducer } from "react";

const ProfileContext = React.createContext();

function ProfileContexteProvider() {
  const [state, dispatch] = useReducer();

  return <div>ProfileContexteProvider</div>;
}

export default ProfileContexteProvider;
