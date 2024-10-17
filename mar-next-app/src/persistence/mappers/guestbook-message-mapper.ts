import { OptionalId, Document, ObjectId } from "mongodb";
import GuestBookMessage from "../entities/guestbook-message";

export function guestBookMessageToDBEntity(
  message: GuestBookMessage
): OptionalId<Document> {
  return {
    _id: new ObjectId(message.id),
    name: message.name,
    message: message.message,
  };
}
export function dbEntityToGuestbookMessage(
  dbEntity: OptionalId<Document>
): GuestBookMessage {
  const guestbookMessage = new GuestBookMessage();

  guestbookMessage.id = dbEntity._id.toString();
  guestbookMessage.createdAt = dbEntity._id.getTimestamp();
  guestbookMessage.name = dbEntity.name;
  guestbookMessage.message = dbEntity.message;

  return guestbookMessage;
}

