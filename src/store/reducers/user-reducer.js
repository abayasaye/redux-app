// import CREATE_USER from "../actions/user-action";
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
      console.log(users);
      return [...users , action.payload];
    case UPDATE_USER:
       let newArray = users.filter(( userItem )=>{
        userItem.Id== action.payload.Id
      });
      users[users.indexOf(newArray[0])] = action.payload
      return [...users]
    case DELETE_USER:
       newArray = users.filter((userItem)=>{
        userItem.Id !== action.payload
       });
       return [...newArray]

    default:
      return {users};
  }
}
