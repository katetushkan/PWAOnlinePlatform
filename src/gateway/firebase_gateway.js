import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

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
    await firebaseInstance.firestore().collection('users').doc(uid).update({
        courseList: courseList
    })
}

export async function retrieveFiles(courseId){
    let storageRef = firebaseInstance.storage().ref()
    let folderRef = "course_" + courseId
    let files = await storageRef.child(folderRef).listAll()
    return files
}

export async function uploadFile(file, fileName, courseId) {
    let filePath = "course_" + courseId + "/" +fileName
    await firebaseInstance.storage().ref().child(filePath).put(file)
}

export async function deleteFile(filePath) {
    await firebaseInstance.storage().ref().child(filePath).delete()
}

export async function downloadFile(filePath) {
    const downloadUrl = await firebaseInstance.storage().ref().child(filePath).getDownloadURL()
    return downloadUrl
}

export async function saveStream (video, courseId) {
    let metadata = {
        contentType: 'video/webm',
    };
    let date = new Date().toLocaleDateString("en-US",{month: "2-digit", day: '2-digit'}).replace("/", "_")
    let filePath = "course_" + courseId + "/" + "Lesson_" + date
    await firebaseInstance.storage().ref().child(filePath).put(video, metadata)
}