"use client";
import styles from "@/app/page.module.css";
import Blog from "@/app/components/Blog";
import HomePage from "./components/HomePage";
<<<<<<< HEAD
import Trending from "./components/Trending";
=======
>>>>>>> fb0ae38db65a74627e3fb11e682f10a3542eced0

export default function Home() {
  return (
    <div id={styles.container}>
      <HomePage />
      <Trending />
      <Blog />
    </div>
  );
}
