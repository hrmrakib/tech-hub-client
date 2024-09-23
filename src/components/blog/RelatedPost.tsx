import React from "react";
import TrendingCard from "../blogs/TrendingCard";

const RelatedPost: React.FC = () => {
  return (
    <div className="border p-6 rounded-lg mt-10">
      <h3 className="text-xl font-medium text-gray-600">Related Posts</h3>
      <hr className="w-full mt-2 mb-5" />
      <div className="flex flex-col gap-5">
        <TrendingCard
          title="How to get better agents in New York, USA"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-trending.png"
          authorName="Sugar Rosie"
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/user1.png"
        />
        <TrendingCard
          title="How to get better agents in New York, USA"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-trending.png"
          authorName="Sugar Rosie"
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/user1.png"
        />
        <TrendingCard
          title="How to get better agents in New York, USA"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-trending.png"
          authorName="Sugar Rosie"
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/user1.png"
        />
        <TrendingCard
          title="How to get better agents in New York, USA"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-trending.png"
          authorName="Sugar Rosie"
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/user1.png"
        />
        <TrendingCard
          title="How to get better agents in New York, USA"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-trending.png"
          authorName="Sugar Rosie"
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/user1.png"
        />
      </div>
    </div>
  );
};

export default RelatedPost;
