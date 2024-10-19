import React from "react";
import styles from "./styles.module.css";
import GuestBookMessage from "../../../../persistence/entities/guestbook-message";
import { unstable_noStore } from "next/cache";

export default function MessageList({
  messages,
}: {
  messages: GuestBookMessage[];
}) {
  unstable_noStore();

  messages = messages.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Innlegg</h2>
      <ul className={styles.messageList}>
        {messages.map((msg) => (
          <li key={msg.id} className={styles.messageItem}>
            <p className={styles.timeStamp}>
              {msg.createdAt.toDateString() == new Date().toDateString()
                ? msg.createdAt.toLocaleTimeString()
                : msg.createdAt.toLocaleDateString()}
            </p>
            <p className={styles.messageName}>{msg.name}</p>
            <p className={styles.messageContent}>{msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

