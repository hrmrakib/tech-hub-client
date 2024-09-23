import React, { useState } from "react";
import Container from "../../components/Container";
import BlogCard from "../../components/blogs/BlogCard";
import SearchBar from "../../components/blogs/SearchBar";
import TrendingNow from "../../components/blogs/TrendingNow";
import Gallery from "../../components/blogs/Gallery";
import Pagination from "../../components/blogs/Pagination";

const Blogs: React.FC = () => {
  const onSearch = (query: string): void => {
    console.log(query);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
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
        <div className="">
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
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
        <div className="min-w-[400px] min-h-[200px]">
          <SearchBar placeholder="Search" onSearch={onSearch} />
          <TrendingNow />
          <Gallery />
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
