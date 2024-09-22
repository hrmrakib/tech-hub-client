import React from "react";

interface TrendingCardProps {
  title: string;
  imageUrl: string;
  authorName: string;
  authorAvatarUrl: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  title,
  imageUrl,
  authorName,
  authorAvatarUrl,
}) => {
  return (
    <div className="flex gap-4 hover:-translate-y-2 duration-500">
      <img
        src={imageUrl}
        alt={title}
        className="size-20 rounded-md bg-gray-300 object-cover"
      />
      <div className="flex flex-col justify-between py-1">
        <p className="text-sm font-semibold leading-[18px] line-clamp-2">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <img
            src={authorAvatarUrl}
            alt={authorName}
            className="size-7 rounded-full bg-gray-300 object-cover"
          />
          <p className="text-sm text-gray-500">{authorName}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
