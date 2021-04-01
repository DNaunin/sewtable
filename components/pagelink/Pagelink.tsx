import Link, { LinkProps } from "next/link";
import React from "react";
import styles from "./Pagelink.module.css";

export default function PageLink({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  return (
    <Link {...props}>
      <a className={styles.pagelink}>{children}</a>
    </Link>
  );
}
