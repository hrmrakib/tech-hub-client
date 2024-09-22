import React from "react";
import Container from "../../components/Container";
import BlogCard from "../../components/blog/BlogCard";
import SearchBar from "../../components/blog/SearchBar";

const Blogs: React.FC = () => {
  const onSearch = (query: string): void => {
    console.log(query);
  };
  return (
    <Container>
      <div className="">
        <h3 className="text-4xl font-bold mb-3">Latest Posts</h3>
        <p className="text-lg font-medium text-gray-500">
          Don't miss the trending news
        </p>
      </div>
      <div className="mt-10 flex gap-14">
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-5">
          <BlogCard
            title="21 Job Interview Tips: How To Make a Great Impression"
            link="/blogs/123"
            description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
            imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorName="Azumi Rose"
            category="News"
            date="25 April 2022"
            readingTime="8 mins"
          />
          <BlogCard
            title="21 Job Interview Tips: How To Make a Great Impression"
            link="/blogs/123"
            description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
            imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorName="Azumi Rose"
            category="News"
            date="25 April 2022"
            readingTime="8 mins"
          />
          <BlogCard
            title="21 Job Interview Tips: How To Make a Great Impression"
            link="/blogs/123"
            description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
            imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorName="Azumi Rose"
            category="News"
            date="25 April 2022"
            readingTime="8 mins"
          />
          <BlogCard
            title="21 Job Interview Tips: How To Make a Great Impression"
            link="/blogs/123"
            description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
            imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
            authorName="Azumi Rose"
            category="News"
            date="25 April 2022"
            readingTime="8 mins"
          />
        </div>
        <div className="min-w-[400px] min-h-[200px]">
          <SearchBar placeholder="Search" onSearch={onSearch} />
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
