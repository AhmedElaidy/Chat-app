import { useState } from "react";
import toast from "react-hot-toast";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import { useAuthContext } from "../context/AuthContext";
interface inputs {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}
export default function useSignup() {
  const [isLoading, setIsLoading] = useState(false);

  const { setAuthUser } = useAuthContext();
  const signup = async (inputs: inputs) => {
    const isInputsSuccess = handleInputErrors(inputs);
    if (!isInputsSuccess) return;
    setIsLoading(true);

    try {
      const res = await axiosClient.post(API_CONSTANTS.auth.signup, inputs);

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

  return { isLoading, signup };
}

function handleInputErrors(inputs: inputs) {
  const { fullName, username, password, confirmPassword, gender } = inputs;

  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields ");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Passwords must be at least 6 characters");
    return false;
  }
  return true;
}
