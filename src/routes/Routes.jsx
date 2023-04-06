import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedPage from "./ProtectedPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  <Route
    path="/"
    element={
      <ProtectedPage guesOnly={false} needLogin={true}>
        <HomePage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/login"
    element={
      <ProtectedPage guesOnly={true} needLogin={false}>
        <LoginPage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/register"
    element={
      <ProtectedPage guesOnly={true} needLogin={false}>
        <RegisterPage />
      </ProtectedPage>
    }
  />,
];

export default routes;
