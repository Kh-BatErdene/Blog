"use client";
import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(3);
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isOnTransition, setIsOnTransition] = useState(false);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=100&per_page=${pages}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="w-screen mb-[100px] ">
      <div className=" w-[1216px] m-auto h-[650px] relative overflow-hidden  ">
        <div
          className="w-[600%] m-auto flex "
          onTransitionStart={() => {
            setIsOnTransition(true);
          }}
          onTransitionEnd={() => {
            if (carouselIndex === 4) {
              setCarouselIndex(1);
              setWithTransition(false);
            }
            if (carouselIndex === 0) {
              setCarouselIndex(3);
              setWithTransition(false);
            }
            setIsOnTransition(false);
          }}
          style={{
            transform: `translateX(-${(100 * carouselIndex) / 6}%)`,
            transition: withTransition ? "300ms" : "none",
          }}
        >
          {posts.map((home) => (
            <HomeCard
              img={home.cover_image}
              title={home.title}
              date={home.readable_publish_date}
            />
          ))}
          {posts.map((home) => (
            <HomeCard
              img={home.cover_image}
              title={home.title}
              date={home.readable_publish_date}
            />
          ))}
        </div>
        <div className="absolute right-0 bottom-0 flex gap-3">
          <button
            onClick={() => {
              if (isOnTransition) return;
              setCarouselIndex((prev) => prev - 1);
              setWithTransition(true);
              setIsOnTransition(true);
            }}
            className="border-gray-300 border-2  w-10 h-10 rounded-md "
          >
            <img src="prev.svg" className="m-auto"></img>
          </button>
          <button
            onClick={() => {
              if (isOnTransition) return;
              setCarouselIndex((prev) => prev + 1);
              setWithTransition(true);
              setIsOnTransition(true);
            }}
            className="border-gray-300 border-2  w-10 h-10 text-gray-300 rounded-md font-black"
          >
            <img src="next.svg" className="m-auto "></img>
          </button>
        </div>
      </div>
    </div>
  );
}
