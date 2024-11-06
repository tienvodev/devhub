import type { Metadata } from "next";
import "./globals.css";
import { fontBrand } from "./styles/fonts";

export const metadata: Metadata = {
  title: "devhub | ask, answer, evolve – powered by ai",
  description:
    "devhub: a community-driven, ai-powered q&a platform for developers. get fast, intelligent answers, earn badges, and build your profile by helping others. join the next generation of knowledge sharing in tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontBrand.variable} font-brand antialiased`}>
        {children}
      </body>
    </html>
  );
}
