import React from "react";
import '../../assets/styles/authenticate.css';
import '../../assets/styles/course-room.css';
import {Link} from "react-router-dom";
import DocumentList from "./DocumentList";
import VideoHolder from "./VideoHolder";

class CourseRoom extends React.Component{

    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div className="course-room professor">
                <div className="course-room-panel">
                    <div className="go-back-btn-wrapper course-room">
                        <button className="go-back course-room" onClick={this.onClickGoBack}/>
                    </div>
                    <h5 className="course-room-name">CourseName</h5>
                    <Link to="/ChatRoom" className="chat-btn"/>
                </div>
                <VideoHolder/>
                <DocumentList/>
            </div>
        )
    }
}

export default CourseRoom;