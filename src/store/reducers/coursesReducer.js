import * as actionTypes from '../actions/actionTypes';
import { updatedObject} from "../utility";

const initialState = {
    courses: {},
    coursesList: {}
}

const subscribe = (state, action) => {
    let list = state.coursesList
    let newList = list ? list : []
    newList.push(action.coursesList)
    debugger
    return updatedObject(state,{
        coursesList: newList
    });
}

const getCoursesSuccess = (state, action) => {
    return updatedObject(state, {
        courses: action.courses
    });
};

const getCoursesListSuccess = (state, action) => {
    return updatedObject(state, {
        coursesList: action.coursesList
    });
};

const coursesReducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.GET_COURSES: return getCoursesSuccess(state, action);
        case actionTypes.GET_COURSES_LIST: return getCoursesListSuccess(state, action);
        case actionTypes.SUBSCRIBE : return subscribe(state, action)
        default:
            return state;
    };

};

export default coursesReducer;