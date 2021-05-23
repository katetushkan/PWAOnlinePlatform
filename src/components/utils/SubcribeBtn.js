import {logout} from "../../store/actions/authActions";
import {useDispatch, useSelector} from "react-redux";
import NavItem from "../utils/NavItem";
import React, {Fragment} from "react";
import {Redirect} from "react-router-dom";

const SubscribeBtn = (props) =>{

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth.auth)

    const onclickHandler = () => {
        dispatch(logout())
    }

    return (
        <Fragment>
            {auth ?
                <button className="subscribe-btn arrow-btn" onClick={onclickHandler}/>
                : <Redirect to="/Login"/>
            }
        </Fragment>

    )
}

export default SubscribeBtn;