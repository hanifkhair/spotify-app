import axios from "axios";
import { auth_types } from "../types";

export function userLogin(account) {
  return async function (dispatch) {
    try {
      const userData = await axios
        .get("http://localhost:2000/user", {
          params: {
            email: account.email.toLocaleLowerCase(),
            password: account.password,
          },
        })
        .then((res) => res.data[0]);
      dispatch({
        type: auth_types.login,
        payload: userData,
      });

      localStorage.setItem("user", JSON.stringify(userData));

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
}
