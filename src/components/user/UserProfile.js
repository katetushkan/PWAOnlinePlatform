import NavMenu from "../mainPage/NavMenu";
import CatalogList from "../courses/CourseList";
import "../../assets/styles/user-profile.css"
import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import NavItem from "../mainPage/NavItem";
import LogOutNavItem from "../auth/LogOut";

class UserProfile extends React.Component{
    componentDidMount() {

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
        const userName = this.props.auth.user ? this.props.auth.user.email.split("@")[0] : 'UserName'
        return(
            <div>
                { this.props.auth.auth ?
                    <div className="course-catalog">
                        <NavMenu className="green-anon">
                            <NavItem className="green-anon" to="/Courses">
                                {'</Courses>'}
                            </NavItem>
                            <LogOutNavItem className="green-anon"/>
                        </NavMenu>
                        <div className="menu-button-wrapper">
                            <button className="menu-green menu-btn" onClick={this.onNavClick}/>
                            <h3 className="user-name">&lt;/{userName}></h3>
                        </div>
                        <CatalogList color="green" indicator="pointer" path='/CourseRoom'/>
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
        token:state.token
    }
}

export default connect(mapStateToProps)(UserProfile);