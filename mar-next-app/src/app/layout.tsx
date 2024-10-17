import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/header";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import Footer from "./components/footer/footer";
import styles from "./layout.module.css";
import Navbar from "./components/navbar/navbar";
import { Germania_One } from "next/font/google";

const germaniaOne = Germania_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-germania-one",
  weight: ["400"],
});

const inputMono = localFont({
  src: [
    {
      path: "./fonts/InputMono/InputMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InputMono/InputMono-Bold.ttf",
      weight: "900",
      style: "bold",
    },
  ],
  variable: "--font-input-mono",
  display: "swap", // Optional, helps control how fonts are rendered
});

export const metadata: Metadata = {
  title: "MAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inputMono.variable} ${germaniaOne.variable}`}>
        <div className={styles.background}>
          <div className={styles.innerBackground}>
            <div>
              <Header />
              <Navbar />
              <Breadcrumbs />
              <main className={styles.main}>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

