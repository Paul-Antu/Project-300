import { useParams } from "react-router-dom";
import Course from "../Components/Course";
import YourJourney from "../Components/YourJourney";

const CourseContainer = () => {
    let params = useParams();
    return (
        <div>
            <Course slug={params}/>
            <YourJourney />
        </div>
    );
};

export default CourseContainer;