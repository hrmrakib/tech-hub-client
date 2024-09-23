import React from "react";
import Container from "../../components/Container";
import RightSide from "../../components/blog/RightSide";
import { MdShare } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import CommentsArea from "../../components/blog/CommentsArea";

const Blog: React.FC = () => {
  return (
    <Container>
      <div className="flex gap-14 mt-10">
        <div className="flex-grow">
          <div className="">
            <h3 className="text-4xl font-bold mb-5 text-justify">
              11 Tips to Help You Get New Clients Through Cold Calling
            </h3>
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/user3.png"
                  alt=""
                  className="size-7 rounded-full bg-gray-300 object-cover"
                />
                <h3 className="text-sm text-gray-500">{"Sarah Harding"}</h3>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-sm text-gray-500">20 April 2022</p>
                <p className="text-sm text-gray-500"> 8 mins to read</p>
              </div>
              <div className="flex gap-5 *:p-2 *:text-2xl *:border *:rounded-lg text-gray-500">
                <button>
                  <FiBookmark />
                </button>
                <button>
                  <MdShare />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img
              className="object-cover w-full h-[400px]"
              src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-content.png"
              alt="Example"
            />
            <div className="space-y-5 mt-5 leading-8 text-lg font text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex
                risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin
                at turpis eget sapien pulvinar luctus. Vestibulum bibendum
                pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum
                neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id
                venenatis velit eleifend. Duis id iaculis risus, quis
                ullamcorper augue. Nunc tristique venenatis ipsum at euismod.
                Pellentesque id arcu est.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex
                risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin
                at turpis eget sapien pulvinar luctus. Vestibulum bibendum
                pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum
                neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id
                venenatis velit eleifend. Duis id iaculis risus, quis
                ullamcorper augue. Nunc tristique venenatis ipsum at euismod.
                Pellentesque id arcu est.
              </p>
              <h3 className="text-2xl font-semibold">In ut odio libero</h3>
              <ul className="list-disc ml-10">
                <li>
                  A portfolio demonstrating well thought through and polished
                  end to end customer journeys
                </li>
                <li>
                  5+ years of industry experience in interactive design and / or
                  visual design
                </li>
                <li>Excellent interpersonal skills </li>
                <li>
                  Aware of trends in mobile, communications, and collaboration
                </li>
                <li>
                  Ability to create highly polished design prototypes, mockups,
                  and other communication artifacts
                </li>
                <li>
                  The ability to scope and estimate efforts accurately and
                  prioritize tasks and goals independently
                </li>
                <li>History of impacting shipping products with your work</li>
                <li>
                  A Bachelor’s Degree in Design (or related field) or equivalent
                  professional experience
                </li>
                <li>
                  Proficiency in a variety of design tools such as Figma,
                  Photoshop, Illustrator, and Sketch
                </li>
              </ul>
              <p>
                Phasellus enim magna, varius et commodo ut, ultricies vitae
                velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                sagittis vel justo. In libero urna, venenatis sit amet ornare
                non, suscipit nec risus. Sed consequat justo non mauris pretium
                at tempor justo sodales. Quisque tincidunt laoreet malesuada.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit
                est. Suspendisse sit amet mauris in quam pretium faucibus et
                aliquam odio.
              </p>
            </div>
            <hr className="my-10 border-t-2 w-[calc(100%-40px)] mx-auto" />
            <div className="flex items-center gap-5 text-gray-600">
              <h3 className="font-bold">Tags:</h3>
              <div className="flex items-center gap-5 *:bg-gray-200 *:py-1 *:px-2 *:rounded-lg">
                <p>#Nature</p>
                <p>#Beauty</p>
                <p>#Travel tips</p>
              </div>
            </div>
          </div>
        </div>
        <RightSide />
      </div>
      <CommentsArea />
    </Container>
  );
};

export default Blog;
