//import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

import routes from "./routes/Routes";

function App() {
  return (
    <Routes>
      {routes.map((val) => val)}
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  );
}

export default App;
