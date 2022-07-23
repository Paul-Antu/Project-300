import { AboutData2 } from "../../Assets/data";

const About = () => {
  return (
    <div>
      <div className="py-20 bg-indigo-100">
        <div className="container items-center max-w-6xl px-6 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  {AboutData2.title}
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  {AboutData2.description}
                </p>
                <ul>
                  {AboutData2.tickPoint.map((item, index) => (
                    <li
                      className="flex items-center py-2 space-x-4 xl:py-3"
                      key={index}
                    >
                      <svg
                        className="w-8 h-8 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature-graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
