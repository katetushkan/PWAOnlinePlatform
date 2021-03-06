import {getCoursesFromFirestore, getUserCourseListByUserUid, retrieveFiles} from "../../gateway/firebase_gateway";

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

export const getFiles = (files) =>{
    return{
        type: actionTypes.GET_FILES,
        files: files
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
    return async dispatch => {
        dispatch(subscribe(id))
    }
}

export const getAllFiles = (id) => {
    return async dispatch => {
        let files = await retrieveFiles(id)
        dispatch(getFiles(files))
    }
}