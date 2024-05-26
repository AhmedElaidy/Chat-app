import { useState } from "react";
import toast from "react-hot-toast";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import { useAuthContext } from "../context/AuthContext";

interface inputs {
  username: string;
  password: string;
}

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (inputs: inputs) => {
    const isInputsSuccess = handleInputErrors(inputs);
    if (!isInputsSuccess) return;
    setIsLoading(true);
    try {
      const res = await axiosClient.post(API_CONSTANTS.auth.login, inputs);

      const data = await res.data;

      if (data.error) throw new Error(data.error);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
}

function handleInputErrors(inputs: inputs) {
  const { username, password } = inputs;

  if (!username || !password) {
    toast.error("Please fill all the fields ");
    return false;
  }

  return true;
}
