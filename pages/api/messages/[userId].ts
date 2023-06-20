import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("Request Body:", req.body);

    const { content, recipientId } = req.body;
    const { currentUser } = await serverAuth(req);

    const newMessage = await prisma.privateMessage.create({
      data: {
        content,
        senderId: currentUser.id,
        recipientId,
      },
    });

    res.status(201).json(newMessage);
  } else if (req.method === "GET") {
    const { userId } = req.query;
    const { currentUser } = await serverAuth(req);

    const validUserId = userId as string;

    const conversation = await prisma.privateMessage.findMany({
      where: {
        OR: [
          { senderId: currentUser.id, recipientId: validUserId },
          { senderId: validUserId, recipientId: currentUser.id },
        ],
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    res.status(200).json(conversation);
  } else if (req.method === "PUT") {
    const { userId } = req.query;
    const { currentUser } = await serverAuth(req);
    const validUserId = userId as string;

    const conversationExists = await prisma.privateMessage.findFirst({
      where: {
        OR: [
          { senderId: currentUser.id, recipientId: validUserId },
          { senderId: validUserId, recipientId: currentUser.id },
        ],
      },
    });

    if (!conversationExists) {
      const emptyConversationData: Prisma.PrivateMessageCreateInput = {
        sender: {
          connect: {
            id: currentUser.id,
          },
        },
        recipient: {
          connect: {
            id: validUserId,
          },
        },
        content: "",
      };

      await prisma.privateMessage.create({ data: emptyConversationData });
    }

    res.status(200).json({ message: "Conversation created or exists" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
