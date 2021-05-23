import React from "react";
import CourseCard from "./CourseCard";
import '../../assets/styles/course-list.css';

const CatalogList = (props) => {

    return(
        <div className="course-list-wrapper">
            { props.courses && Object.values(props.courses).map((course, id) =>
                <CourseCard color={props.color} indicator={props.indicator} path={props.path} key={id} id={id} course={course}/>
            )}
        </div>
    )
}
export default CatalogList;