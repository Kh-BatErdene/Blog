"use client";
import styles from "@/app/page.module.css";
import Blog from "@/app/components/Blog";
import HomePage from "./components/HomePage";
import Trending from "./components/Trending";
export default function Home() {
  return (
    <div id={styles.container}>
      <HomePage />
      <Trending />
      <Blog />
    </div>
  );
}
