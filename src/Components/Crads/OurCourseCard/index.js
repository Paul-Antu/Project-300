import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";

const OurCourseCard = ({ title, description, image, readTime, date, year, slug }) => {
  const trimed = description.substring(0, 50);
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            Photos
          </div>
        </a>
        <a href="!#">
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-20 w-20 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <span className="font-bold">{date}</span>
            <small>{year}</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <Link
          to={`/course/${slug}`}
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </Link>
        <p className="text-gray-500 text-sm">
            {trimed}...
        </p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <FcAlarmClock className="text-gray-900 mr-1" />
          <span className="ml-1">{readTime}</span>
        </span>
      </div>
    </div>
  );
};

export default OurCourseCard;
