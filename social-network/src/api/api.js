import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3d7a8f94-4a44-4697-b649-c61e086dc9d2'
      }
});


export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        },
    follow (userId) {
        return instanse.post(`follow/${userId}`)
        
    },
    unfollow (userId) {
        return instanse.delete(`follow/${userId}`)
    },
    
};

export const profileAPI = {
    getProfile (userId) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instanse.put(`profile/status`, {status: status})
    }
};

export const authAPI = {
   getMe () {
    return instanse.get(`auth/me`)
    },
   login (email, password, rememberMe = false) {
     return instanse.post(`auth/login`, {email, password, rememberMe})
     },
    logout () {
      return instanse.delete(`auth/login`)
     }  
};

