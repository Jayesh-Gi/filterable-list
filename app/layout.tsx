import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Finder",
  description: "A searchable, filterable list starter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
