import React from "react";
import '../../assets/styles/course-info.css';
import {connect} from "react-redux";
import {subscribeToTheCourse} from "../../gateway/firebase_gateway";
import {courseSubscribe} from "../../store/actions/coursesActions";

class CourseInfo extends React.Component{


    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }
    handleSubscribe = async () => {
        await subscribeToTheCourse(this.props.auth.user.uid, parseInt(this.props.match.params.id))
        this.props.subscribe(parseInt(this.props.match.params.id))
    }
    render(){

        const courseId = this.props.match.params.id;
        const course = this.props.courses.courses[courseId];
        const courseName = course.fullName ? course.fullName : "Js";
        const tutor = course.tutor ? course.tutor.split("@")[0] : "Ivan Ivanov";
        const description = course.description ? course.description : "...";
        const date = course.startDate ? new Date(course.startDate.seconds).toLocaleDateString( "en-US",{month: "2-digit", day: '2-digit'}) : "soon";
        const subsribtion = this.props.coursesList ? this.props.coursesList.includes(parseInt(courseId)) : false

        return(
            <div className="course-info-screen">
                <div className="go-back-btn-wrapper course-info">
                    <button className="go-back course-info" onClick={this.onClickGoBack}/>
                </div>
                <div className="course-info-wrapper">
                    <div className="course-info-item-wrapper">
                        <h1 className="course-info-course-name">{courseName}</h1>
                    </div>
                    <div className="course-info-item-wrapper period">
                        <h3 className="course-info-additional">Start date</h3>
                        <h3 className="course-info-additional-value">{date}</h3>
                    </div>
                    <div className="course-info-item-wrapper tutor">
                        <h3 className="course-info-additional">Tutor</h3>
                        <h3 className="course-info-additional-value">{tutor}</h3>
                    </div>
                    <div className="course-info-item-wrapper description">
                        <h3 className="course-info-additional description">Description</h3>
                        <h3 className="course-info-additional-value description">{description}</h3>
                    </div>
                    {
                        !subsribtion && <button className="subscribe-btn arrow-btn" onClick={this.handleSubscribe}/>
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        courses: state.courses,
        coursesList: state.courses.coursesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        subscribe: (id) => dispatch(courseSubscribe(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseInfo);