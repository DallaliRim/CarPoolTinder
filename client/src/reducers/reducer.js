// reducer
import { apiManager } from "../assets/js/api";
import { DEFAULT_USER } from "../assets/js/consts";

export const ACTIONS = {
  SET_LOGIN_STATUS: "set_login_status ",
  SET_PROFILE_STATUS: "set_profile_status ",
  UPDATE_USER: "update_user",
  CLEAR_USER: "clear_user",
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case ACTIONS.SET_PROFILE_STATUS:
      return {
        ...state,
        isProfileUp: action.payload.isProfileUp,
      };

    case ACTIONS.CLEAR_USER:
      return DEFAULT_USER;

    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
          location: {
            ...state.user.location,
            ...(action.payload.user?.location || {}),
          },
          car: {
            ...state.user.car,
            ...(action.payload.user?.car || {}),
          },
          preferences: {
            ...state.user.preferences,
            ...(action.payload.user?.preferences || {}),
          },
          interests: {
            ...state.user.interests,
            ...(action.payload.user?.interests || {}),
          },
        },
      };

    default:
      return state;
  }
}
