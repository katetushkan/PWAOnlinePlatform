import React from "react";
import '../../assets/styles/main-page.css'
import NavMenu from "../utils/NavMenu";
import BigCourseCard from "../utils/BigCourseCard";
import BenefitIcon1 from '../../assets/benefit-icon-1.svg';
import BenefitIcon2 from "../../assets/benefit-icon-2.svg";
import BenefitIcon3 from "../../assets/benefit-icon-3.svg";
import {Link} from "react-router-dom";
import NavItem from "../utils/NavItem";
import LogOutNavItem from "../auth/LogOut";
import MenuBtn from "../utils/MenuBtn";
import {connect} from "react-redux";
import {getCourses} from "../../store/actions/coursesActions";

class MainPage extends React.Component{

    componentDidMount() {
        this.props.getCourses();
    }

    render(){
        return(
            <div className="main-page">

                <NavMenu className="green-anon">
                    <NavItem className="green-anon" to="/Signup">
                        {'</Sign Up>'}
                    </NavItem>
                    <NavItem className="green-anon" to="/Login">
                        {'</Log In>'}
                    </NavItem>
                    <LogOutNavItem className="green-anon"/>
                </NavMenu>
                <MenuBtn className="menu-green"/>
            <section className="introducing-screen">
                <div className="introducing-screen-content">
                    <h1 className="intro-text-h1">Start a new <br/> semester like <br/> a real &lt;/pro>!</h1>
                    <h3 className="intro-text-h3"> Courses from student<br/> to student right<br/> in your hand!</h3>
                    <Link to="/Courses" className="go-to-btn">go to courses ></Link>
                </div>
            </section>
            <section className="benefits-screen">
                <div className="content-wrapper">
                    <h1 className="benefits-text-h1">&lt;/Benefits></h1>
                    <div className="benefits-screen-content grid">

                        <div className="benefit-wrapper">
                            <img className="img-benefits one" alt="1de e" src={BenefitIcon1}/>
                            <h3 className="benefits-text-h3">&lt;/You> can get access<br/> from wherever
                                you<br/> want! Even with no<br/> Internet! Check our<br/> courses’ materials<br/> from
                                everywhere!</h3>
                        </div>
                        <div className="benefit-wrapper">
                            <img className="img-benefits two" alt="1eeee"  src={BenefitIcon2}/>
                            <h3 className="benefits-text-h3">Our &lt;/teachers> are<br/> the
                                real-time<br/> programmers who can<br/> share with you their<br/> latest experience!
                            </h3>
                        </div>
                        <div className="benefit-wrapper">
                            <img className="img-benefits three" alt="ewe1"  src={BenefitIcon3}/>
                            <h3 className="benefits-text-h3">Only you decided how<br/> many &lt;/courses>
                                you<br/> want to attend! There<br/> is a possibility to<br/> pick every course
                                u<br/> would like to!</h3>
                        </div>
                    </div>
                </div>

            </section>
            <section className="course-catalog-screen">
                <div className="content-wrapper">
                    <h1 className="course-catalog-text-h1" id="courses">&lt;/Courses></h1>
                    <div className="catalog-wrapper grid">
                        < Link className="small-card-info-link" to="/CourseInfo">
                            <BigCourseCard courseName={'Js'}/>
                        </Link>
                        <ul className="progress-bar">
                            <li className="progress-bar"/>
                            <li className="progress-bar selected"/>
                            <li className="progress-bar"/>
                            <li className="progress-bar"/>
                            <li className="progress-bar"/>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact-us-screen">
                <div className="content-wrapper">
                    <h1 className="contact-text-h1">Wanna become<br/>a &lt;/tutor>?</h1>
                    <form className="form-wrapper">
                        <input type="email" placeholder="Enter your email..." className="form-field contact"/>
                        <button className="arrow-btn contact-us-btn"/>
                    </form>
                </div>

            </section>
            <footer className="footer">
                <div className="footer-wrapper">
                    <h3 className="footer">Copyright 2021 @Tushkan</h3>
                    <a className="footer" href="https://github.com/katetushkan"/>
                </div>
            </footer>

        </div>
    );
    };
}

const mapStateToProps = (state) => {
    return{
        courses: state.courses,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getCourses: () => dispatch(getCourses()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);