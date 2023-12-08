"use client";
import { useEffect, useState } from "react";
import TrendingCard from "@/app/components/TrendingCard";
import styles from "@/app/page.module.css";

export default function Trending() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(9);

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
  }, [pages]);

  function SeeMore() {
    setPages(pages + 3);
  }
  return (
    <div className={styles.blog_father}>
      <h1 className="font-bold text-2xl ">Trending</h1>
      <div className="flex gap-5 mt-8">
        {" "}
        {posts.map((data) => {
          return <div>{data.name}</div>;
        })}
      </div>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className={styles.blog_card}>
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
      <div className="w-[1216px] flex justify-center m-5">
        <button className={styles.more} onClick={SeeMore}>
          Load more...
        </button>
      </div>
    </div>
  );
}
