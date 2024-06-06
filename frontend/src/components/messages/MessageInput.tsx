import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";
import { useState } from "react";

export default function MessageInput() {
  const { isLoading, sendMessage } = useSendMessages();
  const [currentMessage, setCurrentMessage] = useState("");
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;
    await sendMessage(currentMessage);
    setCurrentMessage("");
  };
  return (
    <form className="px-4 my-3 " onSubmit={handleSumbit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Sent a message"
          value={currentMessage}
          onChange={(e: any) =>
            !isLoading ? setCurrentMessage(e.target.value) : () => {}
          }
        />
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          disabled={isLoading}
        >
          {!isLoading ? (
            <BsSend className="text-white" />
          ) : (
            <span className="loading loading-spinner text-white"></span>
          )}
        </button>
      </div>
    </form>
  );
}
