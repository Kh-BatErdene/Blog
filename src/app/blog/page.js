"use client";
import { useEffect, useState } from "react";
import PostCard from "@/components/BlogCard";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(12);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://dev.to/api/articles?top=3&per_page=${pages}`
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
    <div className="w-[1216px] m-auto">
      <h1 className="font-bold text-2xl ml-3">Blog</h1>
      <div className="flex gap-5 mt-8"></div>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="flex flex-wrap justify-center gap-[10px] mb-10">
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <PostCard
                    img={post.cover_image}
                    {...post}
                    at={post.readable_publish_date}
                  />
                </Link>
              </div>
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
