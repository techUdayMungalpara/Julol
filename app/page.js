import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Next.js",
  description: "The React Framework for the Web",
  themeColor: "black",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/moun.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/moun.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "app",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/moun.jpg",
      alt: "Next.js Logo",
    },
  },
};

export default function Home() {
  return (
    <>
      <h1>Hello 19:22 </h1>
    </>
  );
}
