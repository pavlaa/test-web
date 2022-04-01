import {combineReducers} from "redux";
import {AuthReducer} from "./authReducer";
import {ProfileReducer} from "./profileReducer";


export const rootReducer = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer
})