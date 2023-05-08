import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/Layout.module.css";

type NavLink = {
  path: string;
  name: string;
};

type Props = {
  children?: ReactNode;
  title?: string;
  links?: NavLink[];
};

const defaultTitle = "Next, Prisma and Tailwind";

const Layout = ({ children, title = defaultTitle, links = [] }: Props) => {
  const separator = (i: number) => i < links.length - 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-center items-center p-8">
        <nav>
          {links.length &&
            links.map(({ path, name }, i) => {
              return (
                <React.Fragment key={path}>
                  <Link href={path}>{name}</Link>
                  {separator(i) ? " | " : ""}
                </React.Fragment>
              );
            })}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
