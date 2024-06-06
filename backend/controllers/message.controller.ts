import Conversation from "../models/conversation.model";
import Message from "../models/messaage.model";
import { getReceiverSocketId, io } from "../socket/socket";

export const sendMessage = async (req: any, res: any) => {
  try {
    const { message } = req.body;

    if (!message.trim())
      return res.status(400).json({ error: "Message doesn't have content" });

    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req: any, res: any) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteMessage = async (req: any, res: any) => {
  try {
    const { messageId } = req.params;
    const currentUserId = req.user._id;

    let message = await Message.findById(messageId);

    if (!message)
      return res.status(404).json({ error: "Message Doesn't Exist" });

    if (message.message == "")
      return res.status(401).json({ error: "Message Content Already Deleted" });

    if (!message.senderId.equals(currentUserId))
      return res.status(401).json({
        error: "Unauthorized - You can only delete your own messages",
      });

    await Message.updateOne({ _id: messageId }, { message: "" });

    const receiverSocketId = getReceiverSocketId(message.receiverId.toString());

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("deletedMessage", messageId);
    }

    res.status(200).json(messageId);
  } catch (error) {
    console.error("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
