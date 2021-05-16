import authReducer from "./authReducer";
import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer
})

