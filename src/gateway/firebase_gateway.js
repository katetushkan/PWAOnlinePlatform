import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseInstance = firebase
export const config = {
    apiKey: "AIzaSyBYcoYpeRmhTWcskN4CaqIgpOITdx5xcCM",
    authDomain: "levelup-db38e.firebaseapp.com",
    databaseURL: "https://levelup-db38e-default-rtdb.firebaseio.com",
    projectId: "levelup-db38e",
    storageBucket: "levelup-db38e.appspot.com",
    messagingSenderId: "468483023250",
    appId: "1:468483023250:web:303856080a758f3ea3a14b",
    measurementId: "G-2SDC5CTZV5"
};

export function initializeFirebase(){
    firebaseInstance.initializeApp(config)
    // firebaseInstance.firestore()
}

export async function getCoursesFromFirestore() {
    let courses =  await firebaseInstance.firestore().collection('courses').get()
    return courses.docs.map(doc => doc.data());
}

export async function getUserCourseListByUserUid (uid){
    let userInfo = await firebaseInstance.firestore().collection('users').doc(uid).get();
    return userInfo.data()
}

export async function subscribeToTheCourse(uid, courseId){
    let userInfo = await firebaseInstance.firestore().collection('users').doc(uid).get();
    let list = userInfo.data().courseList
    let courseList = list ? list : []
    courseList.push(courseId)
    debugger
    await firebaseInstance.firestore().collection('users').doc(uid).update({
        courseList: courseList
    })
}