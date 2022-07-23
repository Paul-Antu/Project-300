import About from "../Components/About";
import AboutDetails from "../Components/About/AboutDetails";

const AboutContainer = () => {
    return (
        <div className="mt-10 md:mt-5">
            <AboutDetails />
            <About />
        </div>
    );
};

export default AboutContainer;