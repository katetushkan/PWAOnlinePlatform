import React from "react";
import '../../assets/styles/course-card.css'
import {Link} from "react-router-dom";

const CourseCard = (props) => {
    const indicatorClass = "indicator small-card " + props.indicator
    const wrapperClass = "course-card-wrapper " + props.color
    const nameClass = "course-catalog-card-name " + props.color
    return(
        <div>
        <Link to={props.path}>
            <div className={wrapperClass}>

                <div className="course-catalog-card">
                    <div className={indicatorClass}/>
                    <h1 className={nameClass}>Js</h1>
                </div>

            </div>
        </Link>
        </div>
    )
}

export default CourseCard;