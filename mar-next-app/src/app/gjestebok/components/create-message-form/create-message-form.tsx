"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import createGuestBookMessage from "../../../../server-actions/guestbook-messages/create-message";

export default function CreateMessageForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createGuestBookMessage(name, message);

    setSuccessMessage("Melding publisert!");

    setName("");
    setMessage("");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Publiser melding i gjesteboken</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Navn:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Melding:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          <div className={styles.inner}>Publiser</div>
        </button>
      </form>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      <div className={styles.sparkle}></div>
    </div>
  );
}

