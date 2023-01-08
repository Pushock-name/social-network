import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
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
    getProfile (userId) {
    return instanse.get(`profile/${userId}`)
    }
}



export const authAPI = {
   getMe () {
   return instanse.get(`auth/me`)
    }
}

