import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import whats_notification from "../assets/sounds/whats_notification.mp3";
export default function useListenToMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    console.log("inside useEffect of messages");
    socket?.on("newMessage", (newMessage) => {
      console.log("inside soket of new messages");
      newMessage.shouldShake = true;
      const sound = new Audio(whats_notification);
      sound.play();
      setMessages(
        messages && messages?.length > 0
          ? [...messages, newMessage]
          : [newMessage]
      );
    });
    return () => {
      console.log("inside return of useEffect of messages");
      socket?.off("newMessage");
    };
  }, [messages]);
}
