export const GET_LOGIN = "GET_LOGIN";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";
export const GET_LOGOUT = "GET_LOGOUT";

const defaultState = {
  isLogin: false,
  error: null
}

export const AuthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LOGIN:
      return {...state, isLogin: true};
    case GET_LOGIN_ERROR:
      return {...state, isLogin: false, error: action.payload};
    case GET_LOGOUT:
      return {...state, isLogin: false};
    default:
      return state;
  }
}