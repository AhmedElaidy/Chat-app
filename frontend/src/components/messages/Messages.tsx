import { useEffect, useRef, RefObject } from "react";
import { Message as MessageType } from "../../Types/common";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessagesSkeleton";
import Message from "./Message";
import useListenToMessages from "../../hooks/useListenToMessages";

export default function Messages() {
  const { messages, isLoading } = useGetMessages();
  useListenToMessages();
  const lastMessageRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto pb-2">
      {isLoading && <MessageSkeleton />}
      {!isLoading && messages?.length === 0 && (
        <p className="text-center text-white">
          Send A Message To Start The Conversation
        </p>
      )}
      {!isLoading &&
        messages &&
        messages?.length > 0 &&
        messages?.map((message: MessageType, idx: number) =>
          messages.length - 1 === idx ? (
            <div
              key={message._id}
              ref={lastMessageRef}
              style={{ paddingBottom: "1px" }}
            >
              <Message message={message} />
            </div>
          ) : (
            <div key={message._id}>
              <Message message={message} />
            </div>
          )
        )}
    </div>
  );
}
