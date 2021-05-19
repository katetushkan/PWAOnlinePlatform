import NavMenu from "../utils/NavMenu";
import CatalogList from "../courses/CourseList";
import "../../assets/styles/user-profile.css"
import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import NavItem from "../utils/NavItem";
import LogOutNavItem from "../auth/LogOut";
import {getCourses, getCoursesList} from "../../store/actions/coursesActions";

class UserProfile extends React.Component{
    state = {
        courses: []
    }
    async componentDidMount() {
        let uid = this.props.auth.user && this.props.auth.user.uid
        await this.props.getCourses();
        await this.props.getCourseList(uid);
        let courses = this.props.coursesList && this.mapCourseListToCourses(this.props);
        this.setState({
            courses: courses
        })
    }
    mapCourseListToCourses = (props) => {
        let courses = []
        props.coursesList.forEach((el) =>{
            courses.push(props.courses[el])
        });
        return courses;
    }
    onNavClick = () => {
        const menu_btn = document.querySelector(".menu-btn")
        const menu = document.querySelector('.menu')
        menu_btn.addEventListener('click', () => {
            menu_btn.classList.toggle('open');
            menu.classList.toggle('open');
        })
    }
    render() {
        const userName = this.props.auth.user ? this.props.auth.user.email.split("@")[0] : 'UserName';
        const role = this.props.role && this.props.role;
        const menuClass = role === "student" ? "menu-green menu-btn" : "menu-coral menu-btn";
        const navClass = role === "student" ? "green-anon" : "coral";
        const catalogColor = role === "student" ? "green" : "";
        return(
            <div>
                { this.props.auth.auth ?
                    <div className="course-catalog">
                        <NavMenu className={navClass}>
                            <NavItem className={navClass} to="/Courses">
                                {'</Courses>'}
                            </NavItem>
                            <LogOutNavItem className={navClass}/>
                        </NavMenu>
                        <div className="menu-button-wrapper">
                            <button className={menuClass} onClick={this.onNavClick}/>
                            <h3 className="user-name">&lt;/{userName}></h3>
                        </div>
                        <CatalogList color={catalogColor} indicator="pointer" path='/CourseRoom' courses={this.state.courses}/>
                    </div>
                    :
                    <Redirect to="/Login"/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        courses: state.courses.courses,
        coursesList: state.courses.coursesList,
        role: state.courses.role
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getCourses: () => dispatch(getCourses()),
        getCourseList: (uid) => dispatch(getCoursesList(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);