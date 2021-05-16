import {Link} from "react-router-dom";
import "../../assets/styles/NavMenu.css"
import React from "react";

const NavItem = (props) =>{
    let liClassName = props.className + " menu-option"
    return (
        <li className={liClassName}>
            {
                props.to ?
                    <Link to={props.to}>{props.children}</Link>
                : <button className="menu-option_btn" onClick={props.onClick}>{props.children}</button>
            }

        </li>
    )
}

export default NavItem;
