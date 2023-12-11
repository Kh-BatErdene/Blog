import styles from "@/app/page.module.css";
export const Header = () => {
  return (
    <div id={styles.header}>
      <a href="/">
        <img src="/logo.svg" />
      </a>
      <div className="flex gap-10">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex relative">
        <input
          type="text"
          alt="search"
          placeholder="Search"
          id={styles.search}
        />
        <img
          className="absolute right-1.5 top-1.5"
          src="/magnifying-glass.svg"
        />
      </div>
    </div>
  );
};
