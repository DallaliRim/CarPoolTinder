// reducer
import { apiManager } from "../assets/js/api";

export const ACTIONS = {
  SET_LOGIN_STATUS: "set_login_status ",
  UPDATE_USER: "update_user",
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };

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
