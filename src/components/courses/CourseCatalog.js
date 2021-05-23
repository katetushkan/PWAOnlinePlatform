import React from "react";
import NavMenu from "../utils/NavMenu";
import '../../assets/styles/main-page.css';
import '../../assets/styles/course-catalog.css';
import CatalogList from "./CourseList";
import {connect} from "react-redux";
import NavItem from "../utils/NavItem";
import LogOutNavItem from "../auth/LogOut";
import {getCourses} from "../../store/actions/coursesActions";
import NewMenuButton from "../utils/NewMenuButton";

class CourseCatalog extends React.Component{

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return(
            <div className="course-catalog">
                { this.props.auth.auth ?
                    <NavMenu className="coral">
                        <NavItem className="coral" to="/Signup">
                            {'</Profile>'}
                        </NavItem>
                        <NavItem className="coral" to="/">
                            {'</Main page>'}
                        </NavItem>
                        <LogOutNavItem className="coral"/>
                    </NavMenu>
                    :
                    <NavMenu className="coral">
                        <NavItem className="coral" to="/Signup">
                            {'</Sign Up>'}
                        </NavItem>
                        <NavItem className="coral" to="/Login">
                            {'</Log In>'}
                        </NavItem>
                    </NavMenu>
                }
                <NewMenuButton className="new-menu--coral"/>
                <CatalogList indicator="circle" color="" path='/CourseInfo' courses={this.props.courses}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        courses: state.courses.courses
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getCourses: () => dispatch(getCourses()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseCatalog);