import NavMenu from "../mainPage/NavMenu";
import CatalogList from "../courses/CourseList";
import "../../assets/styles/user-profile.css"
import React from "react";

class UserProfile extends React.Component{
    componentDidMount() {
        const menu_btn = document.querySelector(".menu-btn")
        const menu = document.querySelector('.menu')
        menu_btn.addEventListener('click', () => {
            menu_btn.classList.toggle('open');
            menu.classList.toggle('open');
        })
    }

    render() {
        return(
            <div className="course-catalog">
                <NavMenu className="green-anon" options={["</Sign Up>", '</Log In>']}/>
                <div className="menu-button-wrapper">
                    <button className="menu-green menu-btn"/>
                    <h3 className="user-name">&lt;/Username></h3>
                </div>
                <CatalogList/>
            </div>
        )
    }
}

export default UserProfile;