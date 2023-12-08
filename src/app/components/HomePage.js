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
    <div className="w-[1216px] m-auto">
      <div className=" w-[1216px] m-auto h-[630px] relative overflow-hidden">
        <div
          className="w-[600%] m-auto flex"
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
              date={home.published_at}
            />
          ))}
          {posts.map((home) => (
            <HomeCard
              img={home.cover_image}
              title={home.title}
              date={home.published_at}
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
            className="bg-gray-300 px-2 rounded-md"
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (isOnTransition) return;
              setCarouselIndex((prev) => prev + 1);
              setWithTransition(true);
              setIsOnTransition(true);
            }}
            className="bg-gray-300 px-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
