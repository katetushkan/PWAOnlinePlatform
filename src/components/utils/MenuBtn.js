import React from "react";

const MenuBtn = ({className}) => {
    const classNameBtn =  className + " menu-btn"

    const handleClick = () => {
        const menu_btn = document.querySelector(".menu-btn")
        const menu = document.querySelector('.menu')
        menu_btn.addEventListener('click', () => {
            menu_btn.classList.toggle('open');
            menu.classList.toggle('open');
        })
    }
    return (
        <div className="menu-button-wrapper">
            <button onClick={handleClick} className={classNameBtn}/>
        </div>
    )
}

export default MenuBtn;