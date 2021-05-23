import React from "react";
import { Route } from 'react-router-dom';
import MainPage from "./components/mainPage/MainPage";
import Authenticate from "./components/auth/Authenticate";
import CourseCatalog from "./components/courses/CourseCatalog";
import CourseRoom from "./components/courses/CourseRoom";
import CourseInfo from "./components/courses/CourseInfo";
import ChatRoom from "./components/courses/chat/ChatRoom";
import UserProfile from "./components/user/UserProfile";

const BaseRouter = () => (
    <>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/Login' component={Authenticate}/>
        <Route exact path='/Signup' component={Authenticate}/>
        <Route exact path='/Courses' component={CourseCatalog}/>
        <Route exact path='/CourseRoom/:id' component={CourseRoom}/>
        <Route exact path='/CourseInfo/:id' component={CourseInfo}/>
        <Route exact path="/ChatRoom/:id" component={ChatRoom}/>
        <Route exact path="/Profile" component={UserProfile}/>
    </>
);

export default BaseRouter;