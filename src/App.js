import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import HomeLayout from "./Layouts/HomeLayout"
import UserRoutes from "./router"

function App() {
  return (
    <div className="App">
      <Router>
        <HomeLayout>
          <UserRoutes />
        </HomeLayout>
      </Router>
    </div>
  );
}

export default App;
