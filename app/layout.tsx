import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { fontBrand } from "@/app/styles/fonts";

export const metadata: Metadata = {
  title: "devpub | ask, answer, evolve – powered by ai",
  description:
    "devpub: a community-driven, ai-powered q&a platform for developers. get fast, intelligent answers, earn badges, and build your profile by helping others. join the next generation of knowledge sharing in tech",
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
