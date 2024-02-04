import { SERVER_URL } from "./consts.js";

const apiInterface = {
  SERVER_URL: `${SERVER_URL}`,

  GET: async function (endpoint) {
    const response = await fetch(`${endpoint}`);
    return await response.json();
  },

  POST: async function (endpoint, data) {
    const response = await fetch(`${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    return await response.json();
  },

  PUT: async function (endpoint, data) {
    const response = await fetch(`${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    return response.status;
  },
};

export const apiManager = {
  fetchSuitableUsers: async (prefs) => {
    console.log("here 1")
    const users = await apiInterface.POST("/api/suitable-users", prefs);
    console.log(users)
    return users;
  },
  fetchUser: async (email) => {
    const user = await apiInterface.POST(`/api/user`, email);
    return user;
  },
  setUser: async (user) => {
    await apiInterface.POST(`/api/update-user`, user);
  },
  setAvatar: async (email) => {
    await apiInterface.POST(`/api/update-avatar`, email);
  },
};
