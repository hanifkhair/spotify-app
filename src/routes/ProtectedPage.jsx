import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({ children, guesOnly, needLogin }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const nav = useNavigate();
  useEffect(() => {
    if (guesOnly && user?.email) {
      return nav("/");
    } else if (needLogin && !user?.email) {
      return nav("/login");
    }
  });

  return children;
}
