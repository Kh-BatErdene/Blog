import styles from "@/app/page.module.css";
export const Footer = () => {
  return (
    <div id={styles.lastpart}>
      <div id={styles.footer}>
        <div className=" md:flex block  md:justify-between justify-center items-start ">
          <div className="w-[290px] md:block hidden ">
            <h2 className="font-bold mb-4">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4">Email : info@jstemplate.net</p>
            <p className="mt-2">Phone : 880 123 456 789</p>
          </div>
          <div className="  flex justify-center">
            <div className="flex flex-col gap-3 ">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
            </div>
          </div>{" "}
          <img className="md:m-0 m-auto mt-5" src="Socials.svg" />
        </div>
        <div className="flex md:justify-between justify-center items-center mt-16">
          <img src="Logo.svg" />

          <div className="md:flex hidden gap-5">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
