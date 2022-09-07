import CREATE_USER from "../actions/user-action";
import {
  ADD_USER,
  DELETE_USER,
  GET_BY_ID,
  UPDATE_USER,
} from "../types/user-types";

export default function userReducer({users}, action) {
  switch (action.type) {
    case GET_BY_ID:
      return [...users];
    case ADD_USER:
      return [...users , action.payload];
    case UPDATE_USER:
      return users.filter((userItem)=>{
        
      });
    case DELETE_USER:
      return;

    default:
      return state;
  }
}
