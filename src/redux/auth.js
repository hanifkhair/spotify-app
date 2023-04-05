const init = {
  email: "aaaa",
  password: "",
};

function userReducer(state = init, action) {
  //adalah aksionevent yang terjadi

  if (action.type == "login")
    return {
      ...state,
      email: action.playload.email,
      password: action.playload.password,
    };
  else if (action.type == "logout") {
    return init;
  }
  return state;
}

export default userReducer;
