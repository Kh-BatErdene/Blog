"use client";
import { someContext } from "@/app/layout";
import styles from "@/app/page.module.css";
import { useContext } from "react";

export const Header = () => {
  const { search, setSearch } = useContext(someContext);

  return (
    <div className="flex items-center justify-between p-3 m-auto mb-[100px] xl:max-w-[1280px] md:max-w-[840px] max-w-[390px] bg-white drop-shadow-sm ">
      <a href="/">
        <img src="/logo.svg" />
      </a>
      <div className="md:flex hidden gap-10">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex relative">
        <input
          className="md:block hidden"
          type="text"
          alt="search"
          placeholder="Search"
          id={styles.search}
          onChange={(item) => {
            setSearch(item.target.value);
          }}
        />
        <img
          className="absolute right-1.5 top-1.5 md:block hidden"
          src="/magnifying-glass.svg"
        />
        <img className="md:hidden block right-1.5 top-1.5" src="/menu.svg" />
      </div>
    </div>
  );
};
