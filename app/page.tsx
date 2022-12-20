import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Message } from "../typings";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then((res)=>res.json());
  const messages: Message[] = data.messages;
  
  return (
    <main>
      <MessageList initialMessages={messages}/>
      <ChatInput/>
    </main>
  );
}

export default HomePage;
