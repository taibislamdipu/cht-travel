import React, { useState } from "react";

const Blog = () => {
  const [posts] = useState([
    {
      title: "Travelling in Bangladesh",
      image: "https://i.ibb.co/K6zGT7X/blog1Img.jpg",
      content:
        "Bangladesh is a beautiful country located in South Asia, known for its lush green landscapes, rich culture, and friendly people. It is a popular destination for travelers looking for an off-the-beaten-path experience. The best time to visit Bangladesh is from October to March, during the dry season. The weather is pleasant and makes it easy to explore the country.",
    },
    {
      title: "Travel Destination in Bangladesh",
      image: "https://i.ibb.co/TvnZrDp/blog2Img.jpg",
      content:
        "One of the must-see destinations in Bangladesh is the Sundarbans, a mangrove forest located in the delta of the Ganges, Brahmaputra, and Meghna rivers. It is home to the Bengal tiger, as well as a variety of other wildlife. Visitors can take a boat ride through the forest to spot the tigers and other animals, or explore the forest on foot with a local guide.",
    },
  ]);

  const BlogPost = ({ post }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 my-8">
        <img
          src={post?.image}
          alt={post?.title}
          className="w-full rounded-lg md:h-72 object-cover"
        />
        <h2 className="text-lg font-bold my-4">{post?.title}</h2>
        <p className="text-gray-700">{post?.content}</p>
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
