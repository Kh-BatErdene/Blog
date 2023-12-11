"use client";
import { useEffect, useState } from "react";
import TrendingCard from "@/components/TrendingCard";
import styles from "@/app/page.module.css";

export default function Trending() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(4);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://dev.to/api/articles?top=14&per_page=${pages}`
      );
      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className={styles.blog_father}>
      <h1 className="font-bold text-2xl ">Trending</h1>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="flex gap-4 flex-wrap">
          {posts.map((post) => {
            return (
              <TrendingCard
                title={post.title}
                img={post.cover_image}
                at={post.published_at}
              />
            );
          })}
        </div>
      )}
      <div className="w-[1216px] flex justify-center m-5"></div>
    </div>
  );
}
