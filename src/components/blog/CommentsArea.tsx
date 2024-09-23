import React from "react";

const CommentsArea: React.FC = () => {
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold">Leave a comment</h3>
      <div className="flex flex-col items-end mt-5  max-w-[calc(100%-456px)]">
        <textarea
          className="border border-black p-4 rounded-md bg-white w-full h-[200px]"
          placeholder="Your thoughts here..."
        />
        <button className="mt-4 bg-black text-white font-medium py-2 px-4 rounded-md">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsArea;
