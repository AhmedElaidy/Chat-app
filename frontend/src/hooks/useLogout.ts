import { useState } from "react";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setIsLoading(true);
    try {
      const res = await axiosClient.post(API_CONSTANTS.auth.logout);
      const data = await res.data;
      if (data.error) throw new Error(data.error);
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, logout };
}
