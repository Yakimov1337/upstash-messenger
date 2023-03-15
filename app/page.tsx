import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Message } from "../typings";
import { getServerSession } from "next-auth";
import { Providers } from "./providers";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );
  const messages: Message[] = data.messages;
  const session = await getServerSession();

  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default HomePage;
