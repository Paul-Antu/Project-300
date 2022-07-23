import { Routes, Route } from "react-router-dom";
import { AllRoutes } from "./routes";

const UserRoutes = () => {
  return (
    <Routes>
      {AllRoutes.map((data, index) => (
        <Route key={index} path={data.path} element={data.component} />
      ))}
    </Routes>
  );
};

export default UserRoutes;
