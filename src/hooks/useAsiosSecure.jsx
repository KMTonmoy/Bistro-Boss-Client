import axios from "axios";

const axiosSecure = axios.create({
    baseURL: '../../public/menu.json'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;