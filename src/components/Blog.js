"use client";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import styles from "@/app/page.module.css";
import data from "@/components/blog.json";
import Link from "next/link";
import PostCard from "@/app/[id]/page";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(9);
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
                <BlogCard
                  title={post.title}
                  img={post.cover_image}
                  at={post.published_at}
                />
              </div>
            );
          })}
          {/* <Link href={`/${post.id}`}>
            <PostCard {...post} />
          </Link> */}
        </div>
      )}
      <div className="w-[1216px] flex justify-center m-5 mt-[100px]">
        <button className={styles.more} onClick={SeeMore}>
          Load more...
        </button>
      </div>
    </div>
  );
}
