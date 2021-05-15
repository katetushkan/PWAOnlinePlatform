import {logout} from "../../store/actions/authActions";
import {useDispatch, useSelector} from "react-redux";
import NavItem from "../mainPage/NavItem";
import React, {Fragment} from "react";
import {Redirect} from "react-router-dom";

const LogOutNavItem = (props) =>{

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth.auth)

    const onclickHandler = () => {
        dispatch(logout())
    }

    return (
        <Fragment>
            {auth ?
                <NavItem className={props.className} onClick={onclickHandler}>
                    {'</Log Out>'}
                </NavItem>
              : <Redirect to="/"/>
            }
        </Fragment>

    )
}

export default LogOutNavItem;