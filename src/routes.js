import PageNotFound from "./Components/PageNotFound";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AboutContainer from "./Containers/AboutContainer";
import ContactContainer from "./Containers/ContactContainer";
import CourseContainer from "./Containers/CourseContainer";
import CoursesContainer from "./Containers/CoursesContainer";
import HomeContainer from "./Containers/HomeContainer";
import PrivacyContainer from "./Containers/PrivacyContainer";

export const AllRoutes = [
    {
      path: "/",
      component: <HomeContainer />,
    },
    {
      path: "/about",
      component: <AboutContainer />,
    },
    {
      path: "/contact",
      component: <ContactContainer />,
    },
    {
      path: "/courses",
      component: <CoursesContainer />,
    },
    {
      path: "/course/:slug",
      component: <CourseContainer />,
    },
    {
      path: "/privacy",
      component: <PrivacyContainer />,
    },
    {
      path: "/sign-in",
      component: <SignIn />,
    },
    {
      path: "/sign-up",
      component: <SignUp />,
    },
    {
      path: "*",
      component: <PageNotFound />,
    }
  ];