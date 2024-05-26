import { create } from "zustand";
import { conversation } from "../Types/common";

interface ConversationState {
  shownConversations: conversation[] | [];
  setShownConversations: (conversations: conversation[] | null) => void;
}

const useShownConversations = create<ConversationState>((set) => ({
  shownConversations: [],
  setShownConversations: (shownConversations: any) =>
    set({ shownConversations }),
}));

export default useShownConversations;
