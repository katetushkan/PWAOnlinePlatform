import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import {firebaseInstance} from "./gateway/firebase_gateway";
import {authSuccess} from "./store/actions/authActions";
import {getCourses, getCoursesList} from "./store/actions/coursesActions";

const AuthRefresh = ({children}) => {
    const dispatch = useDispatch();
    const [authStateReceived, setAuthStateReceived] = useState(false);

    useEffect(() => {
        firebaseInstance.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authSuccess('', user));
                dispatch(getCourses())
                dispatch(getCoursesList(user.uid))
            }
            setAuthStateReceived(true);
        });
    }, []);

    return (
        <>
            {authStateReceived ? children : null}
        </>
    );
}

class App extends React.Component {
    render() {
        return(
            <Router>
                <AuthRefresh>
                    <BaseRouter/>
                </AuthRefresh>
            </Router>
        )
  }
}

export default App;
