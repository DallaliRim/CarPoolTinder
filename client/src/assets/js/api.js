import { SERVER_URL } from "./consts.js";

const apiInterface = {
  SERVER_URL: `${SERVER_URL}`,

  GET: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
    return await response.json();
  },

  POST: async function (endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    return await response.json();
  },

  PUT: async function (endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
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
    const users = await apiInterface.POST(
      `${SERVER_URL}/suitable-users`,
      prefs
    );
    return users;
  },
  fetchUser: async (email) => {
    const user = await apiInterface.POST(`${SERVER_URL}/user`, email);
    return user;
  },
  setUser: async (user) => {
    await apiInterface.POST(`${SERVER_URL}/update-user`, user);
  },
  setAvatar: async (email) => {
    await apiInterface.POST(`${SERVER_URL}/update-avatar`, email);
  },
};
