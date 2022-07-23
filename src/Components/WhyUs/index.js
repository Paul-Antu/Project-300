import { whyWeData } from "../../Assets/data";
import WhyWeCard from "../Crads/WhyWeCard";

const WhyUs = () => {
  return (
    <div className="py-16 bg-indigo-100">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <h1 className="text-4xl text-center mb-10 font-semibold text-indigo-600">
          Why we?
        </h1>
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {whyWeData.map((data, index) => (
            <WhyWeCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
