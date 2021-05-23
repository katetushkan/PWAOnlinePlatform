import * as actionTypes from '../actions/actionTypes';
import { updatedObject} from "../utility";

const initialState = {
    courses: {},
    coursesList: {},
    files: {}
}

const subscribe = (state, action) => {
    let list = state.coursesList
    let newList = list ? list : []
    newList.push(action.coursesList)
    return updatedObject(state,{
        coursesList: newList
    });
}

const getCoursesSuccess = (state, action) => {
    return updatedObject(state, {
        courses: action.courses
    });
};

const getAllFiles = (state, action) => {
    return updatedObject(state, {
        files: action.files
    });
};



const getCoursesListSuccess = (state, action) => {
    return updatedObject(state, {
        coursesList: action.coursesList,
        role: action.role
    });
};

const coursesReducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.GET_COURSES: return getCoursesSuccess(state, action);
        case actionTypes.GET_COURSES_LIST: return getCoursesListSuccess(state, action);
        case actionTypes.SUBSCRIBE : return subscribe(state, action);
        case actionTypes.GET_FILES : return getAllFiles(state, action);
        default:
            return state;
    };

};

export default coursesReducer;