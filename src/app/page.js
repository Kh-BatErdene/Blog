"use client";
import styles from "@/app/page.module.css";
import Blog from "@/app/components/Blog";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div id={styles.container}>
      <HomePage />
      <Blog />
    </div>
  );
}
