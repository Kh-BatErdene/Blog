"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { createContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const someContext = createContext();

export default function RootLayout({ children }) {
  const [search, setSearch] = useState();

  return (
    <someContext.Provider value={{ search, setSearch }}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </someContext.Provider>
  );
}
