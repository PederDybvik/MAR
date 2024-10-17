"use server";

import GuestBookMessage from "../../persistence/entities/guestbook-message";
import GuestbookMessageRepository from "../../persistence/repositories/guestbook-message-repository";

export default async function createGuestBookMessage(
  name: string,
  message: string
): Promise<GuestBookMessage> {
  const guestbookMessageRepository = new GuestbookMessageRepository();

  const guestbookMessage = new GuestBookMessage(name, message);

  const createdGuestbookMessage = await guestbookMessageRepository.create(
    guestbookMessage
  );

  return createdGuestbookMessage;
}

