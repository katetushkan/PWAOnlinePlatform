import {getCoursesFromFirestore, getUserCourseListByUserUid} from "../../gateway/firebase_gateway";

import * as actionTypes from "./actionTypes";

export const getCoursesSuccess = (courses) =>{
    return{
        type: actionTypes.GET_COURSES,
        courses: courses
    }
};

export const getCoursesListSuccess = (coursesList, role) =>{
    return{
        type: actionTypes.GET_COURSES_LIST,
        coursesList: coursesList,
        role: role
    }
};
export const subscribe = (id) =>{
    return{
        type: actionTypes.SUBSCRIBE,
        coursesList: id
    }
};

export const getCourses = () => {
    return async dispatch => {
        let courses = await getCoursesFromFirestore()
        dispatch(getCoursesSuccess(courses))
    }
}

export const getCoursesList = (uid) => {
    return async dispatch => {
        let coursesList = await getUserCourseListByUserUid(uid)
        dispatch(getCoursesListSuccess(coursesList.courseList, coursesList.role))
    }
}

export const courseSubscribe = (id) => {
    return dispatch => {
        debugger
        dispatch(subscribe(id))
    }
}