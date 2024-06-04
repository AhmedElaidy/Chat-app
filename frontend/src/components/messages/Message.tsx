import { IoBan } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { Message as MessageType } from "../../Types/common";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "./extractTime";
import styles from "./message.module.css";
import toast from "react-hot-toast";
import useDeleteMessage from "../../hooks/useDeleteMessage";

export default function Message({ message }: { message: MessageType }) {
  const { message: messageContent, receiverId, createdAt } = message;
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isRecievedMessage = receiverId === authUser?._id;
  const formattedMessageTime = extractTime(createdAt);
  const { isLoading, deleteMessage } = useDeleteMessage();

  const chatCLassName = isRecievedMessage ? "chat-start" : "chat-end";
  const bubbleBgColor = isRecievedMessage ? "" : "bg-blue-500 ";
  const profilePic = isRecievedMessage
    ? selectedConversation?.profilePic
    : authUser?.profilePic;
  const shakeClass = message?.shouldShake ? "shake" : "";
  const deletedMessage = isRecievedMessage
    ? "text-gray-400"
    : "flex-row-reverse text-gray-300";
  const deletedMessageText = isRecievedMessage
    ? "This message has been deleted"
    : "You deleted this message";

  const showDeleteToast = () => {
    toast.dismiss();
    toast(
      <div>
        <div>Are you sure you want to delete message?</div>
        <div className="flex justify-around">
          <button
            className="btn btn-error"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {!isLoading ? (
              "Yes"
            ) : (
              <span className="loading loading-spinner text-white"></span>
            )}{" "}
          </button>
          <button className="btn btn-active" onClick={() => toast.dismiss()}>
            No
          </button>
        </div>
      </div>
    );
  };

  const handleDelete = async () => {
    await deleteMessage(message._id);
    toast.dismiss();
    toast.success("Message Deleted Successfully");
  };

  return (
    <>
      <div className={`chat ${chatCLassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="profile_pic" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble text-white text-right ${bubbleBgColor} ${shakeClass} pb-2 ${
            !isRecievedMessage && messageContent.trim() && styles.message
          }`}
          style={{ wordBreak: "break-word" }}
        >
          {messageContent.trim() ? (
            !isRecievedMessage ? (
              <div className={styles.message_content}>
                <p>{messageContent}</p>
                <FaTrash onClick={showDeleteToast} />
              </div>
            ) : (
              <p>{messageContent}</p>
            )
          ) : (
            <p className={` flex items-center gap-1 ${deletedMessage}`}>
              {deletedMessageText} <IoBan />
            </p>
          )}
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
