import { conversation } from "../../Types/common";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

interface Conversation {
  conversation: conversation;
  lastIdx: boolean;
}

export default function Conversation({ conversation, lastIdx }: Conversation) {
  const { fullName, profilePic } = conversation;
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelectedConversation =
    selectedConversation?._id === conversation?._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  function changeConversation() {
    if (!isSelectedConversation) {
      setSelectedConversation(conversation);
    }
  }

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelectedConversation ? "bg-sky-500" : ""
        }`}
        onClick={changeConversation}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{fullName}</p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}
