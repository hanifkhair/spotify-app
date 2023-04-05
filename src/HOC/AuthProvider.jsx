import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user?.email) {
      dispatch({
        type: auth_types.login,
        payload: user,
      });
    }
    console.log(user);
  }, []);

  return children;
}
