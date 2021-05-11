import React from "react";
import { Route } from 'react-router-dom';
import MainPage from "./components/mainPage/MainPage";
import Authenticate from "./components/auth/Authenticate";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/Login' component={Authenticate}/>
        <Route exact path='/Signup' component={Authenticate}/>
    </div>
);

export default BaseRouter;