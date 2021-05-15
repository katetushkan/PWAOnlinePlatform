import React from "react";
import '../../assets/styles/course-info.css'

class CourseInfo extends React.Component{
    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }
    render(){
        return(
            <div className="course-info-screen">
                <div className="go-back-btn-wrapper course-info">
                    <button className="go-back course-info" onClick={this.onClickGoBack}/>
                </div>
                <div className="course-info-wrapper">
                    <div className="course-info-item-wrapper">
                        <h1 className="course-info-course-name">CourseName</h1>
                    </div>
                    <div className="course-info-item-wrapper period">
                        <h3 className="course-info-additional">Period</h3>
                        <h3 className="course-info-additional-value">03/21-05/21</h3>
                    </div>
                    <div className="course-info-item-wrapper tutor">
                        <h3 className="course-info-additional">Tutor</h3>
                        <h3 className="course-info-additional-value">Anton Ivanov</h3>
                    </div>
                    <div className="course-info-item-wrapper description">
                        <h3 className="course-info-additional description">Description</h3>
                        <h3 className="course-info-additional-value description">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</h3>
                    </div>
                    <button className="subscribe-btn arrow-btn"/>
                </div>
            </div>
        )
    }
}

export default CourseInfo;