import './../../assets/styles/menu-button.css';
import React from "react";

const NewMenuButton = ({className, userName}) => {
    const handleOnChange = (event) => {
        // alert(event.currentTarget.checked)
        const menu = document.querySelector('.menu')
        menu.classList.toggle('open');
    }

    return (
        <div className="menu-button-wrapper">
        <label className={`new-menu ${className}`}>
            <input
                className='new-menu__input'
                type='checkbox'
                onChange={handleOnChange}
            />
            <span className='new-menu__btn'>


            </span>
        </label>
            { userName && <h3 className="user-name">&lt;/{userName}></h3>}
        </div>
    );
}

export default NewMenuButton;
