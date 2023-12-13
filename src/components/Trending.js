"use client";
import { useEffect, useState } from "react";
import TrendingCard from "@/components/TrendingCard";
import styles from "@/app/page.module.css";
import Link from "next/link";

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
    <div className="md:max-w-[1216px] max-w-[390px] m-auto mb-[100px] ">
      <h1 className="font-bold text-2xl mb-10 ml-3">Trending</h1>
      <div className="  ">
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <div className="flex gap-4 flex-wrap justify-center ">
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <Link href={`/${post.id}`}>
                    <TrendingCard img={post.cover_image} {...post} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        <div className="w-[1216px] flex justify-center m-5"></div>
      </div>
    </div>
  );
}
