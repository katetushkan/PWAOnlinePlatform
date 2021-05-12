import React from "react";
import CourseCard from "./CourseCard";
import '../../assets/styles/course-list.css';

const CatalogList = () => {
    return(
        <div className="course-list-wrapper">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
    )
}
export default CatalogList;