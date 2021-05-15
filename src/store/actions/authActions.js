import * as actionTypes from "./actionTypes";
import {firebaseInstance} from "../../gateway/firebase_gateway";
import {credential} from "firebase-admin/lib/credential";

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, user) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        user: user,
        token: token
    }
};

export const authFail = error => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () =>  {
    localStorage.removeItem('token');
    // FirebaseLogoutHere

    firebaseInstance.auth().signOut().then(() => {
    }).catch((error) => {
        console.log(error)
    });
    return{
        type: actionTypes.AUTH_LOGOUT
    }
};

export const authLogin = (creds) => {
    return dispatch => {
        dispatch(authStart());
        firebaseInstance.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(res => {
            const token = res.user.uid;
            dispatch(authSuccess(token, res.user))
            console.log(res)
        }).catch(err => {
            dispatch(authFail(err))
        })
    }

}

export const authLoginGoogle = () => {
    return dispatch => {
        dispatch(authStart());
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebaseInstance.auth().useDeviceLanguage();
        firebaseInstance.auth()
            .signInWithPopup(provider)
            .then((result) => {
                firebaseInstance.firestore().collection('users').doc(result.user.uid)
                let credential = result.credential;
                const token = credential.accessToken;
                dispatch(authSuccess(token, result.user))

            }).catch((error) => {
            dispatch(authFail(error))
        });

    }

}

export const authSignUp = (creds) => {
    return dispatch => {
        dispatch(authStart());
        firebaseInstance.auth().createUserWithEmailAndPassword(creds.email, creds.password)
            .then((result) => {
                firebaseInstance.firestore().collection('users').doc(result.user.uid)
                const token = result.user.uid;
                dispatch(authSuccess(token, result.user))
            })
            .catch((error) => {
                dispatch(authFail(error))
            });
    }
}