import React from "react";
import '../../assets/styles/course-card.css'
import {Link} from "react-router-dom";

const CourseCard = () => {
    return(
        <div>
        <Link to="/CourseRoom">
            <div className="course-card-wrapper">

                <div className="course-catalog-card coral-card">
                    <div className="indicator circle"/>
                    <h1 className="course-catalog-card-name white">Js</h1>
                </div>

            </div>
        </Link>
        </div>
    )
}

export default CourseCard;