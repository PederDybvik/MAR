import Image from "next/image";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.abu}
        src="/abu.png"
        alt="Abu"
        width={0}
        height={0}
        unoptimized={true}
      />
      <div className={styles.title}>
        <h2>Velkommen til</h2>
        <h1>MED ALL RESPEKT</h1>
        <h2>sin helt egen nettside</h2>
      </div>
      <Image
        className={styles.sandeep}
        src="/sandeep.png"
        alt="Sandeep"
        width={0}
        height={0}
        unoptimized={true}
      />
    </header>
  );
}

