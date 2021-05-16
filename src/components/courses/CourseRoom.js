import React from "react";
import '../../assets/styles/authenticate.css';
import '../../assets/styles/course-room.css';
import {Link, Redirect} from "react-router-dom";
import DocumentList from "./DocumentList";
import VideoHolder from "./VideoHolder";
import {connect} from "react-redux";

class CourseRoom extends React.Component{

    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }

    render() {
        const courseId = this.props.match.params.id;
        return (
            <div>
                {this.props.auth.auth ?
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
                    :
                    <Redirect to="/Login"/>

                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        token:state.token
    }
}

export default connect(mapStateToProps)(CourseRoom);