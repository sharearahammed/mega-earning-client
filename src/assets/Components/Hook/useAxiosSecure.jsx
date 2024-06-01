import axios from 'axios'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('req stopped by inter',token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },function(error){
        return Promise.reject(error)
    }
)

// interceptor 401 and 403 status
axiosSecure.interceptors.response.use((response)=>{
    return response;
},async(err)=>{
    const status = err.response.status;
    console.log('status error in the interceptor',status)
    if(status === 401 || status === 403){
        await logOut();
        navigate('/login')
    }
    return Promise.reject(err)
})

    return axiosSecure;
}

export default useAxiosSecure