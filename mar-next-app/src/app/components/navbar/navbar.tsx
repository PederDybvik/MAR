"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <NavbarElement path="" title="Home" />
      <NavbarElement path="gjestebok" title="Gjestebok" />
    </nav>
  );
}

function NavbarElement({ path, title }: { path: string; title: string }) {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/").filter((segment) => segment);

  let firstSegment = pathnameSegments[0];

  if (firstSegment === undefined) {
    firstSegment = "";
  }

  return (
    <div className={firstSegment == path ? styles.selectedTab : styles.tab}>
      <Link href={`/${path}`}>{title}</Link>
    </div>
  );
}

