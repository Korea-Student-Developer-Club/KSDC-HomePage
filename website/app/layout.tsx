import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const NanumSquare = localFont({
  src: [
    {
      path: "../public/fonts/NanumSquare_acL.ttf",
      weight: "300",
    },

    {
      path: "../public/fonts/NanumSquare_acR.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/NanumSquare_acB.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/NanumSquare_acEB.ttf",
      weight: "800",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KSDC",
  description: "Korea Student Developer Club의 홈페이지",
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={NanumSquare.className}>{children}</body>
    </html>
  );
}
