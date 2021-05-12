import React from "react";
import NavMenu from "../mainPage/NavMenu";
import '../../assets/styles/main-page.css';
import '../../assets/styles/course-catalog.css';
import CatalogList from "./CourseList";

class CourseCatalog extends React.Component{

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
                <NavMenu className="coral" options={["</Sign Up>", '</Log In>']}/>
                <div className="menu-button-wrapper">
                    <button className="menu-coral menu-btn"/>
                </div>
                <CatalogList/>
            </div>
        )
    }
}

export default CourseCatalog;