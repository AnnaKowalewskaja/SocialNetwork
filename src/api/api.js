import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "e316ae25-52cd-49d0-912e-744058dc3add",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollowUsers(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  followUsers(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
};
export const profileAPI = {
  profileUser(userId) {
    return instance
      .get(`profile/` + userId)

      .then((response) => response.data);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateUserStatus(status) {
    console.log(status);
    return instance.put(`profile/status`, {status });
  },
};
export const authAPI = {
  profileUser(userId) {
    //"Obsolete method"
    return profileAPI.profileUser(userId);
  },

  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
