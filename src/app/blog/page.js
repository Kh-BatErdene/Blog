"use client";
import { useEffect, useState } from "react";
import PostCard from "@/app/components/BlogCard";
import styles from "@/app/page.module.css";
import data from "@/app/components/blog.json";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(12);
  const blog = data;

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
    <div className={styles.blog_father}>
      <h1 className="font-bold text-2xl ">Blog</h1>
      <div className="flex gap-5 mt-8">
        {" "}
        {blog.map((data) => {
          return <div>{data.name}</div>;
        })}
      </div>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className={styles.blog_card}>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <PostCard
                    title={post.title}
                    img={post.cover_image}
                    at={post.published_at}
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
