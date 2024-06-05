import { conversation } from "../../Types/common";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import useShownConversations from "../../zustand/useShownConversations";

export default function Conversations() {
  const { isLoading } = useGetConversations();
  const { shownConversations } = useShownConversations();
  return (
    <div className=" py-2 flex flex-col overflow-auto h-[15vh] md:h-[100%]">
      {!isLoading ? (
        shownConversations?.map((conversation: conversation, idx: number) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === shownConversations.length - 1}
          />
        ))
      ) : (
        <span className="loading loading-spinner mx-auto"></span>
      )}
    </div>
  );
}
