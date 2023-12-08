import styles from "@/app/page.module.css";
export const Header = () => {
  return (
    <div id={styles.header}>
      <img src="logo.svg" />
      <div className="flex gap-10">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex">
        <input
          type="text"
          alt="search"
          placeholder="Search"
          id={styles.search}
        />
        <img className="bg-neutral-200 p-2" src="magnifying-glass.svg" />
      </div>
    </div>
  );
};
