import React from "react";
import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html>
        <head />
        <body>
          {/* @ts-expect-error Server Component */}:
            <Header />
          {children}
        </body>
      </html>
  );
}
