import {ADD_EVENT} from "../reducers/profileReducer";


export const AddEvent = (event) => {
  return async (dispatch) => {
    dispatch({type: ADD_EVENT, payload: event})
  }
}

