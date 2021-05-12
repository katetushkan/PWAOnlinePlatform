import React from "react";
import '../../assets/styles/main-page.css'
import NavMenu from "./NavMenu";
import BigCourseCard from "./BigCourseCard";
import BenefitIcon1 from '../../assets/benefit-icon-1.svg';
import BenefitIcon2 from "../../assets/benefit-icon-2.svg";
import BenefitIcon3 from "../../assets/benefit-icon-3.svg";
import {getCourses} from "../../gateway/firestore_gateway";
import { connect} from "react-redux";

class MainPage extends React.Component{

    async componentDidMount() {
        const menu_btn = document.querySelector(".menu-btn")
        const menu = document.querySelector('.menu')
        menu_btn.addEventListener('click', () => {
            menu_btn.classList.toggle('open');
            menu.classList.toggle('open');
        })

        let courses = await getCourses();
        console.log(courses)
    }



    render(){
        return(
            <div className="main-page">

            <NavMenu className="green-anon" options={["</Sign Up>", '</Log In>', '</Courses>']}/>
            <div className="menu-button-wrapper">
                <button className="menu-green menu-btn"/>
            </div>
            <section className="introducing-screen">
                <div className="introducing-screen-content">
                    <h1 className="intro-text-h1">Start a new <br/> semester like <br/> a real &lt;/pro>!</h1>
                    <h3 className="intro-text-h3"> Courses from student<br/> to student right<br/> in your hand!</h3>
                    <a className="go-to-btn">go to courses ></a>
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
                        <BigCourseCard courseName={'Js'}/>
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
    return {
        token: state.auth.token
    }
}

export default connect()(MainPage);