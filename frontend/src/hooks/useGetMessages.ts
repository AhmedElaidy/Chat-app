import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import toast from "react-hot-toast";

export default function useGetMessages() {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const res = await axiosClient.get(
          API_CONSTANTS.messages.getAll + selectedConversation?._id
        );

        const data = await res.data;

        if (data.erorr) throw new Error(data.error);

        setMessages(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id]);

  return { isLoading, messages };
}
