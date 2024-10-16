"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Styles from "./styles.module.css";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  // Split the path into segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Create an array of breadcrumbs
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    // Capitalize the segment for display
    const segmentDisplayName = segment.charAt(0).toUpperCase() + segment.slice(1);

    return (
      <React.Fragment key={href}>
        <Link href={href}>{segmentDisplayName}</Link>
        {index < pathSegments.length - 1 && " > "}
      </React.Fragment>
    );
  });

  return (
    <nav aria-label="breadcrumb" className={Styles.main}>
      <Link href="/">Home</Link>
      {pathSegments.length > 0 && " > "}
      {breadcrumbs}
    </nav>
  );
};

export default Breadcrumbs;

