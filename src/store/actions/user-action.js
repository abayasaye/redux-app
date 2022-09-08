import { ADD_USER, GET_BY_ID } from '../types/user-types'

const getUserAction = () => {
    return { type: GET_BY_ID }
}
const addUser = (userObj) => {
    return { type: ADD_USER, payload: userObj }
}
export{
    getUserAction,
    addUser
}