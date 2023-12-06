"use client";

import PostCard from "./PostCard";

export default function Trending(props) {
  return (
    <div>
      <h1 className="font-bold text-2xl">Trending</h1>
      {props.isLoading && <div>Loading...</div>}
      {!props.isLoading && (
        <div>
          {props.posts.map((post) => {
            return <PostCard title={post["title"]} />;
          })}
        </div>
      )}
    </div>
  );
}
