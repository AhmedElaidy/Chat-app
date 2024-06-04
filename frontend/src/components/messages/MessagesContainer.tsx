import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";

export default function MessagesContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, []);
  return (
    <div className="md:w-[600px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div
            className="bg-slate-500 px-4 py-2 mb-2 flex gap-1"
            style={{ alignItems: "center" }}
          >
            <span className="label-text font-semibold">To : </span>
            <span className=" text-white">{selectedConversation.fullName}</span>
            <span
              className={` outline-white outline-4 ${
                isOnline ? "text-green-500" : "text-red-500"
              }`}
            >
              ●
            </span>
            <div></div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
