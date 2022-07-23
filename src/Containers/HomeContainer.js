import Contact from "../Components/Contact";
import Courses from "../Components/Courses";
import Home from "../Components/Home";
import WhyUs from "../Components/WhyUs";
import YourJourney from "../Components/YourJourney";
const HomeContainer = () => {
  return (
    <div>
        <Home />
        <WhyUs />
        <YourJourney />
        <Courses />
        <Contact/>
    </div>
  );
};

export default HomeContainer;
