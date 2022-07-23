import OurCourseCard from "../Crads/OurCourseCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:4000/courses/get")
    .then(res => {
      setCourses(res.data.data);
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }, []);

  return (
    <div className="bg-indigo-100 pt-10 md:pt-5">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
        <h1 className="text-4xl text-center mb-10 font-semibold text-indigo-600">
          Our Courses
        </h1>
        {courses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <OurCourseCard key={index} {...course} />
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
