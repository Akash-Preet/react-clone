import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      {posts.map((post, index) => (
        <Post
          imageURL={post.imageURL}
          username={post.username}
          caption={post.caption}
          comments={post.comments}
          key={index}
        />
      ))}
    </div>
  );
};

export default Posts;
