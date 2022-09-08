import { GET_BY_ID, UPDATE_USER } from '../types/user-types'

const getUserAction = () => {
    return { type: GET_BY_ID }
}
const createUserAction = (userObj) => {
    return { type: UPDATE_USER, payload: userObj }
}
export{
    getUserAction,
    createUserAction
}