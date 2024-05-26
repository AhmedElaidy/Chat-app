import { Message as MessageType } from "../../Types/common";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "./extractTime";

export default function Message({ message }: { message: MessageType }) {
  const { message: messageContent, receiverId, createdAt } = message;
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isRecievedMessage = receiverId === authUser?._id;
  const formattedMessageTime = extractTime(createdAt);

  const chatCLassName = isRecievedMessage ? "chat-start" : "chat-end";
  const bubbleBgColor = isRecievedMessage ? "" : "bg-blue-500 ";
  const profilePic = isRecievedMessage
    ? selectedConversation?.profilePic
    : authUser?.profilePic;
  const shakeClass = message?.shouldShake ? "shake" : "";

  return (
    <>
      <div className={`chat ${chatCLassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble text-white text-right ${bubbleBgColor} ${shakeClass} pb-2`}
          style={{ wordBreak: "break-word" }}
        >
          <p>{messageContent}</p>
        </div>
        <div
          className={`chat-footer opacity-50 text-xs flex gap-1 items-center text-white`}
        >
          {formattedMessageTime}
        </div>
      </div>
    </>
  );
}
