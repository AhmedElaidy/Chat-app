import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

export default function useListenToMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages(
        messages && messages?.length > 0
          ? [...messages, newMessage]
          : [newMessage]
      );
    });

    socket?.on("deletedMessage", (messageId) => {
      setMessages(
        messages?.map((msg) =>
          msg._id === messageId ? { ...msg, message: "" } : msg
        )
      );
    });
    return () => {
      socket?.off("newMessage");
      socket?.off("deletedMessage");
    };
  }, [messages]);
}
