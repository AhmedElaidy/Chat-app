import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io, { Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
  onlineUsers: any[];
}

// Define the default context value
const defaultSocketContext: SocketContextType = {
  socket: null,
  onlineUsers: [],
};

export const SocketContext = createContext(defaultSocketContext);

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export default function SocketContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-app-3nz9.onrender.com", {
        // const socket = io("http://localhost:5000", 
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);
      socket?.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}
