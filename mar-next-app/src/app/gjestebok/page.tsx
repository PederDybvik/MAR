"use server";

import getAllGuestBookMessages from "../../server-actions/guestbook-messages/get-all-messages";
import CreateMessageForm from "./components/create-message-form/create-message-form";
import MessageList from "./components/message-list/message-list";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Guestbook() {
  const messages = await getAllGuestBookMessages();
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Gjestebok</h1>
      <Image
        src="/book.gif"
        className={styles.book}
        alt="bok"
        width={0}
        height={0}
      />
      <CreateMessageForm />
      <MessageList messages={messages} />
    </div>
  );
}

