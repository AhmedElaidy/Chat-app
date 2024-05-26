import { create } from "zustand";
import { Message, conversation } from "../Types/common";

interface ConversationState {
  selectedConversation: conversation | null;
  setSelectedConversation: (conversation: conversation | null) => void;
  messages: Message[] | null;
  setMessages: (messages: any) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: any) =>
    set({ selectedConversation }),
  messages: null,
  setMessages: (messages: any) => set({ messages }),
}));

export default useConversation;
