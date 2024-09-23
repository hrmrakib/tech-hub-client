import React from "react";

const Gallery: React.FC = () => {
  return (
    <div className="border p-6 rounded-lg mt-10">
      <h3 className="text-xl font-medium">Gallery</h3>
      <hr className="w-full mt-2 mb-5" />
      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery1.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery2.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery3.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery4.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery5.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery6.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery7.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery8.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/gallery9.png"
          alt=""
          className="size-full rounded-md bg-gray-300 object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
