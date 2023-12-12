"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostCard() {
  const { id } = useParams();

  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setPost(data);
      setIsLoading(false);
    };
    getData();
  }, [id]);
  console.log(post);
  return (
    <div className="w-[1216px] m-auto">
      {post && (
        <h1 className="font-bold text-[36px] m-auto w-[90%] mb-10">
          {post.title}
        </h1>
      )}
      <div className="flex items-center gap-5 text-[#696A75] font-bold mb-5">
        {post && (
          <img
            className="w-[50px] rounded-full"
            src={post.user.profile_image}
          />
        )}
        {post && <p>{post.user.name}</p>}
        {post && <p>{post.readable_publish_date}</p>}
      </div>

      {post && <img className="w-full rounded-xl" src={post.cover_image} />}
      {post && (
        <p className="text-[20px] text-[#3B3C4A] leading-[32px] mt-5 mb-10 w-[1216px] text-justify">
          {post.body_markdown}
        </p>
      )}

      {/* {post && <div dangerouslySetInnerHTML={{ __html: post.body_html }}></div>} */}
    </div>
  );
}
