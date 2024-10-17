"use server";

import GuestBookMessage from "../../persistence/entities/guestbook-message";
import GuestbookMessageRepository from "../../persistence/repositories/guestbook-message-repository";

export default async function getAllGuestBookMessages(): Promise<
  GuestBookMessage[]
> {
  const guestbookMessageRepository = new GuestbookMessageRepository();

  const guestBookMessages = guestbookMessageRepository.getAll();

  return guestBookMessages;
}

