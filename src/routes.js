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
    <div>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/Login' component={Authenticate}/>
        <Route exact path='/Signup' component={Authenticate}/>
        <Route exact path='/Courses' component={CourseCatalog}/>
        <Route exact path='/CourseRoom' component={CourseRoom}/>
        <Route exact path='/CourseInfo' component={CourseInfo}/>
        <Route exact path="/ChatRoom" component={ChatRoom}/>
        <Route exact path="/Profile" component={UserProfile}/>
    </div>
);

export default BaseRouter;