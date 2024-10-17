import { Collection, Document, WithId } from "mongodb";
import GuestBookMessage from "../entities/guestbook-message";
import clientPromise from "../mongodb-client";
import {
  dbEntityToGuestbookMessage,
  guestBookMessageToDBEntity,
} from "../mappers/guestbook-message-mapper";

export default class GuestbookMessageRepository {
  private async getCollection(): Promise<Collection<Document>> {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("guestbook-messages");
    return collection;
  }

  async getAll(): Promise<GuestBookMessage[]> {
    const collection = await this.getCollection();
    const dbEntities: WithId<Document>[] = await collection.find({}).toArray();
    return dbEntities.map((dbEntity) => dbEntityToGuestbookMessage(dbEntity));
  }

  async create(message: GuestBookMessage): Promise<GuestBookMessage> {
    const collection = await this.getCollection();
    const result = await collection.insertOne(
      guestBookMessageToDBEntity(message)
    );
    return result[0];
  }
}

