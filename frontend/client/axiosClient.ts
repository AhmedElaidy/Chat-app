import axios from "axios";

const axiosClient = axios.create({
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default axiosClient;
