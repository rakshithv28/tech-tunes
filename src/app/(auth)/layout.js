import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Tech Tunes Motors",
  description: "Car Repair shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
