export interface conversation {
  _id: string;
  fullName: string;
  username: string;
  gender: "male" | "female";
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  shouldShake: boolean | null;
}
