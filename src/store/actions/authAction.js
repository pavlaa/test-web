import {GET_LOGIN, GET_LOGIN_ERROR, GET_LOGOUT} from "../reducers/authReducer";


export const GetLogin = ({login, password}) => {
  return async (dispatch) => {
    const userData = {
      login: "Admin",
      password: "12345678"
    }

    if (userData.login === login && userData.password === password) {
      dispatch({type: GET_LOGIN})
    } else {
      dispatch({type: GET_LOGIN_ERROR, payload: "Wrong email or password"})
    }
  }
}

export const GetLogout = () => {
  return async (dispatch) => {
    dispatch({type: GET_LOGOUT})
  }
}

