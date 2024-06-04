import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axiosClient from "../../client/axiosClient";
import { API_CONSTANTS } from "../../client/api-constants";
import toast from "react-hot-toast";

export default function useDeleteMessage() {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages } = useConversation();

  const deleteMessage = async (messageId: string) => {
    setIsLoading(true);
    try {
      const res = await axiosClient.delete(
        API_CONSTANTS.messages.delete + messageId
      );
      const data = await res.data;

      if (data.error) throw new Error(data.error);

      setMessages(
        messages?.map((msg) =>
          msg._id === messageId ? { ...msg, message: "" } : msg
        )
      );
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, deleteMessage };
}
