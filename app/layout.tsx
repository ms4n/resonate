import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Resonate.",
  description:
    "Log your meals, track your macros. Resonate: the AI-powered food journaling app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body className="font-inter">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
