import React from "react";
import { Route } from 'react-router-dom';
import MainPage from "./components/mainPage/MainPage";
import Authenticate from "./components/auth/Authenticate";
import CourseCatalog from "./components/courses/CourseCatalog";
import CourseRoom from "./components/courses/CourseRoom";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/Login' component={Authenticate}/>
        <Route exact path='/Signup' component={Authenticate}/>
        <Route exact path='/Courses' component={CourseCatalog}/>
        <Route exact path='/CourseRoom' component={CourseRoom}/>
    </div>
);

export default BaseRouter;