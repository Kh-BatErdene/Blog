"use client";
import { useContext, useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { someContext } from "@/app/layout";

const tag = ["All", "Design", "Travel", "Fashion", "Tecnology", "Branding"];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [pages, setPages] = useState(9);
  const [activeTag, setActiveTag] = useState(tag[1]);
  const { search, setSearch } = useContext(someContext);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://dev.to/api/articles?top=1000&per_page=${pages}&${
          activeTag === `All` ? `` : `tag=${activeTag.toLowerCase()}`
        }`
      );
      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    };
    getData();
  }, [pages, activeTag]);

  function SeeMore() {
    setPages(pages + 3);
  }

  return (
    <div className="md:max-w-[1216px] max-w-[390px] m-auto ">
      <div className="max-w-[1216px] ml-3">
        <h1 className="font-bold text-2xl ">Blog</h1>
        <div className=" gap-5 mt-8 md:flex hidden">
          {tag.map((item) => {
            return (
              <button
                className="focus:text-[#D4A373] font-semibold"
                onClick={() => {
                  setActiveTag(item);
                  setPages((pages = 9));
                }}
                key={item}
                style={{
                  color: item == activeTag ? "#D4A373" : "",
                  fontWeight: item === activeTag ? "bolder" : "",
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="flex flex-wrap gap-[10px] max-w-[1216px] justify-center">
          {posts
            .filter((item) => {})
            .map((post) => {
              return (
                <div className="w-[393px] rounded-md  " key={post.id}>
                  <Link href={`/${post.id}`}>
                    <BlogCard
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
      <div className="max-w-[1216px] flex justify-center m-5 mt-[100px]">
        <button className={styles.more} onClick={SeeMore}>
          Load more...
        </button>
      </div>
    </div>
  );
}
