export const SERVER_URL = "http://localhost:3000";

export const DEFAULT_USER = {
  isLoggedIn: false,
  isProfileUp: false,
  user: {
    age: 0,
    email: "",
    first: "",
    last: "",
    profilePicLink: "",
    gender: "",
    location: {
      country: "",
      province: "",
      city: "",
      postalCode: "",
    },
    car: { model: "", plate: "" },
    preferences: {
      gender: "",
      radius: 0,
      hasCar: false,
      ageMin: 0,
      ageMax: 0,
    },
    interests: {
      musicGenre: [],
      spotifyPlaylistLink: "",
      occupation: "",
      interests: [],
      about: "",
    },
  },
};
