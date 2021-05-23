import React from "react";
import '../../assets/styles/NavMenu.css';


const NavMenu = (props) => {
    const navClassName = "menu " + props.className
    return (
        <div>
            <nav className={navClassName}>
                <ul className={props.className}>
                    {props.children}
                </ul>
            </nav>
        </div>
    );


}

export default NavMenu;