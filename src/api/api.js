import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "f7c74fa8-78d2-415f-8e71-1b506f4aee99" },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const follow = (userId) => {
  return instance.post(`follow/${userId}`, {}).then((response) => {
    return response.data;
  });
};

export const unFollow = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => {
    return response.data;
  });
};
