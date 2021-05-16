import React from "react";
import '../../assets/styles/course-card.css'
import {Link} from "react-router-dom";

const CourseCard = (props) => {
    const indicatorClass = "indicator small-card " + props.indicator
    const wrapperClass = "course-card-wrapper " + props.color
    const nameClass = "course-catalog-card-name " + props.color
    const link = props.path + "/" + props.id
    return(
        <div>
        <Link to={link}>
            <div className={wrapperClass}>

                <div className="course-catalog-card">
                    <div className={indicatorClass}/>
                    <h1 className={nameClass}>{props.course && props.course.name}</h1>
                </div>

            </div>
        </Link>
        </div>
    )
}

export default CourseCard;