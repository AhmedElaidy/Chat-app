import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import toast from "react-hot-toast";

export default function useSendMessages() {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string) => {
    setIsLoading(true);
    try {
      const res = await axiosClient.post(
        API_CONSTANTS.messages.send + selectedConversation?._id,
        { message }
      );
      const data = await res.data;

      if (data.error) throw new Error(data.error);

      setMessages(messages ? [...messages, data] : [data]);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, sendMessage };
}
