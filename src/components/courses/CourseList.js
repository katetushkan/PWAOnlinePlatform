import React from "react";
import CourseCard from "./CourseCard";
import '../../assets/styles/course-list.css';

const CatalogList = (props) => {
    return(
        <div className="course-list-wrapper">
            <CourseCard color={props.color} indicator={props.indicator} path={props.path}/>
            <CourseCard color={props.color} indicator={props.indicator} path={props.path}/>
            <CourseCard color={props.color} indicator={props.indicator} path={props.path}/>
        </div>
    )
}
export default CatalogList;