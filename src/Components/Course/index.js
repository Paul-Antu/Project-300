import axios from "axios";
import { useEffect, useState } from "react";
import PageNotFound from "../PageNotFound";
import "./index.css";
const Course = ({ slug }) => {
  const [blog, setblog] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/courses/get")
    .then(res => {
      const post = res.data.data.find((course) => course.slug === slug.slug);
      setblog(post);
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
    
  }, [slug]);

  return (
    <>
      {blog ? (
        <div className="max-w-screen-xl mx-auto p-5 mt-8 sm:p-10 md:p-16 relative">
          <div
            className="bg-cover text-center overflow-hidden bg-image"
            title="Woman holding a mug"
            style={{
              backgroundImage: `url(${blog.image})`,
            }}
          ></div>
          <div className="max-w-2xl mx-auto">
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="">
                <p
                  className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {blog.readTime}
                </p>
                <h1 href="/#" className="text-gray-900 font-bold text-3xl mb-2">
                  {blog.title}
                </h1>
                <p className="text-gray-700 text-xs mt-2">
                  Written By:
                  <span
                    className="text-indigo-600 font-medium text-sm hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    {blog.author}
                  </span>
                </p>
                <p
                  className="text-xs text-indigo-500 mt-1 italic uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {blog.date} {blog.year}
                </p>
                <p className="text-base leading-8 my-5">
                  {blog.overView}
                </p>
                <h3 className="text-2xl font-bold my-5">
                  {blog.secondaryTitle}
                </h3>
                <p className="text-base leading-8 my-5">
                  {blog.description}
                </p>
                
                {
                  blog.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Course;
