"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};

export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  // SETUP SOCKET.IO
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_WS_URL) {
      console.warn("WebSocket URL is not set. Skipping socket connection.");
      return;
    }

    const username = localStorage.getItem("username") || generateRandomCursor().name;
    const socket = io(process.env.NEXT_PUBLIC_WS_URL!, {
      query: { username },
    });

    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to WebSocket");
    });

    socket.on("msgs-receive-init", (msgs) => {
      setMsgs(msgs);
    });

    socket.on("msg-receive", (msg) => {
      setMsgs((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
      console.log("Disconnected from WebSocket");
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, users, setUsers, msgs }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
