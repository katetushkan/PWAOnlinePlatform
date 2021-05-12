import React from "react";
import '../../assets/styles/NavMenu.css'
import { Link } from "react-router-dom"


const NavMenu = (props) => {
    const navClassName = "menu " + props.className
    let liClassName = props.className + " menu-option"
    return (
        <div>
            <nav className={navClassName}>
                <ul className={props.className}>
                    {
                        props.options && props.options.map(function(el,index) {
                            const link = el.substring(2, el.length-1).replace(" ", "")
                            return <li className={liClassName} key={index}><Link className={props.className} to={link}>{el}</Link></li>
                        })
                    }
                </ul>
            </nav>
        </div>
    );


}

export default NavMenu;