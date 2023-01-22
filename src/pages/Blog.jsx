import React, { useState } from "react";

const Blog = () => {
  const [posts] = useState([
    {
      title: "My First Blog Post",
      image: "https://i.ibb.co/K6zGT7X/blog1Img.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero nec nisi malesuada feugiat. Sed euismod, augue eu dictum pretium, nisl elit convallis augue, a tempor nibh nulla id risus. Sed aliquam, quam eget luctus blandit, risus neque congue massa, vel viverra nisl nisl eget nisl. Sed euismod, augue eu dictum pretium, nisl elit convallis augue, a tempor nibh nulla id risus.",
    },
    {
      title: "My Second Blog Post",
      image: "https://i.ibb.co/TvnZrDp/blog2Img.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero nec nisi malesuada feugiat. Sed euismod, augue eu dictum pretium, nisl elit convallis augue, a tempor nibh nulla id risus. Sed aliquam, quam eget luctus blandit, risus neque congue massa, vel viverra nisl nisl eget nisl. Sed euismod, augue eu dictum pretium, nisl elit convallis augue, a tempor nibh nulla id risus.",
    },
  ]);

  const BlogPost = ({ post }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 my-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg md:h-72 object-cover"
        />
        <h2 className="text-lg font-medium my-4">{post.title}</h2>
        <p className="text-gray-700">{post.content}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl gap-14 mx-auto my-10">
      {posts.map((post, i) => (
        <BlogPost post={post} key={i} />
      ))}
    </div>
  );
};

export default Blog;
