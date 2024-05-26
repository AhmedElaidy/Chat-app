import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import { conversation } from "../Types/common";
import useShownConversations from "../zustand/useShownConversations";

export default function useGetConversations() {
  const [isLoading, setIsLoading] = useState(false);
  const [allConversations, setAllConversations] = useState<conversation[]>([]);
  const { setShownConversations } = useShownConversations();

  useEffect(() => {
    const getConversations = async () => {
      setIsLoading(true);
      try {
        const res = await axiosClient.get(API_CONSTANTS.users.getAll);

        const data = res.data;

        if (data.erorr) throw new Error(data.error);

        setAllConversations(data);
        setShownConversations(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getConversations();
  }, []);

  return {
    isLoading,
    allConversations,
  };
}
