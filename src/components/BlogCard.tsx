import React from "react";

// Define a type for the BlogCard props
interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="max-w-md mx-auto border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </a>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
        <a
          href={link}
          className="inline-block mt-4 text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
