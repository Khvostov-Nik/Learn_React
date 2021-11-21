import axios from "axios";

const API_KEY = "f7c74fa8-78d2-415f-8e71-1b506f4aee99"

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    { withCredentials: true }
  ).then(response => {
      return response.data;
    });
};


export const follow = (userId) =>{
 return   axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers:{
          "API-KEY": API_KEY
        }
      }
    ).then(response => {
        return response.data;
      });
}

export const unFollow = (userId) =>{
    return   axios.delete(
         `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
         {
           withCredentials: true,
           headers:{
             "API-KEY": API_KEY
           }
         }
       ).then(response => {
           return response.data;
         });
   }