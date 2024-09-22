import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  authorName: string;
  date: string;
  authorAvatarUrl: string;
  category: string;
  readingTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  authorName,
  date,
  authorAvatarUrl,
  category,
  readingTime,
}) => {
  return (
    <div className="w-full border rounded-2xl p-3 hover:-translate-y-2 hover:shadow-md hover:border-gray-300 my-auto duration-500">
      <Link to={link}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </Link>
      <p className="bg-blue-200 py-1 text-blue-600 text-xs my-5 flex justify-center items-center rounded-md max-w-12">
        {category}
      </p>
      <div className="">
        <Link to={link}>
          <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors leading-[26px]">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-4">
          <img
            src={authorAvatarUrl}
            alt=""
            className="size-10 rounded-full bg-gray-300 object-cover"
          />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-500">
              {authorName || "Anonymous"}
            </h3>
            <p className="text-xs text-gray-500">{date || "Unknown date"}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 font-medium">
          {readingTime} to read
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
