"use client";
import styles from "@/app/page.module.css";
import Blog from "@/components/Blog";
import HomePage from "../components/HomePage";
import Trending from "@/components/Trending";
import { useState } from "react";
export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div id={styles.container}>
      <HomePage />
      <Trending />
      <Blog />
    </div>
  );
}
