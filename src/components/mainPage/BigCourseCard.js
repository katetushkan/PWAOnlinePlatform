import React from "react";

const BigCourseCard = (props) =>{


    return (
        <div className="card-wrapper grid">
            <button className="go-left-btn"/>
            <div className="course-big-card">
                <div className="card-inside-wrapper">
                    <div className="schedule-wrapper">
                        <div className="schedule">
                            <time className="schedule-text">Mn: 3:20pm</time>
                            <time className="schedule-text">Wed: 1:25pm</time>
                        </div>
                        <div className="indicator circle"/>
                    </div>
                    <h1 className="course-name">{props.courseName}</h1>
                </div>
            </div>
            <button className="go-right-btn"/>
        </div>
    )
}

export default BigCourseCard