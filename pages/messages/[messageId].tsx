import { useState } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import Conversations from "@/components/messages/Conversations";
import ChatWindow from "@/components/messages/ChatWindow";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Messages = () => {
  const router = useRouter();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(
    (router.query.selectedUser as string | null) || null
  );

  const [showConversations, setShowConversations] = useState<boolean>(true);

  return (
    <>
      <Header label="Messages" showBackArrow />
      <div className="flex flex-row justify-between relative h-[72vh]">
        <div
          className={`
            transition-all
            duration-300
            ease-in-out
            flex
            ${showConversations ? "w-1/3" : "w-0"}
            `}
        >
          <Conversations
            onUserSelect={setSelectedUserId}
            show={showConversations}
          />
        </div>
        <div
          className={`
            transition-all 
            duration-300 
            ease-in-out
            flex
            w-full
            
          `}
        >
          {selectedUserId ? (
            <ChatWindow
              userId={selectedUserId}
              showConversations={showConversations}
              setShowConversations={setShowConversations}
            />
          ) : (
            <div
              className="
            dark:bg-neutral-900
            bg-white
            rounded-md
            m-2
            p-4
            flex
            flex-col
            w-full
            justify-center
            items-center
            "
            >
              <h2 className="dark:text-neutral-600 text-neutral-100 text-xl font-semibold">
                Write a message.
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Messages;
