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
  return (
    <div>
      {post && <img src={post.cover_image}></img>}
      {post && <div dangerouslySetInnerHTML={{ __html: post.body_html }}></div>}
    </div>
  );
}
