"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children, session }) => {
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
