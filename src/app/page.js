"use client";
import styles from "@/app/page.module.css";
import Trending from "@/app/posts/Trending";
import { useEffect, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(5);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div id={styles.container}>
      <Trending posts={posts} setPosts={setPosts} isLoading={isLoading} />
    </div>
  );
}
