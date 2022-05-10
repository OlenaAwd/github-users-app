import { combineReducers } from "redux";
import usersReducer from "./users";
import userReducer from "./user";



const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
})

export default rootReducer;