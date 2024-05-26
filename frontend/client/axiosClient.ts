import axios from "axios";

const axiosClient = axios.create({
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) throw new Error(error?.response.data.error);
    if (error?.message) throw new Error(error.message);
    throw new Error(error);
  }
);

export default axiosClient;
