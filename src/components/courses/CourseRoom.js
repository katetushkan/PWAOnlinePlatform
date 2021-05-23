import React from "react";
import '../../assets/styles/authenticate.css';
import '../../assets/styles/course-room.css';
import {Link, Redirect} from "react-router-dom";
import DocumentList from "./DocumentList";
import VideoHolder from "./VideoHolder";
import {connect} from "react-redux";
import {getAllFiles} from "../../store/actions/coursesActions";

class CourseRoom extends React.Component{

    state = {
        files: []
    }

    async componentDidMount() {
        await this.props.getFiles(this.props.match.params.id)
    }

    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }

    render() {
        const courseId = this.props.match.params.id;
        const course = this.props.courses[courseId];
        const fullname = course ? course.fullName : "Js";
        const chatRoomLink = "/ChatRoom/" + this.props.match.params.id;
        return (
            <>
                {this.props.auth.auth ?
                    <div className="course-room professor">
                        <div className="course-room-panel">
                            <div className="go-back-btn-wrapper course-room">
                                <button className="go-back course-room" onClick={this.onClickGoBack}/>
                            </div>
                            <h5 className="course-room-name">{fullname}</h5>
                            <Link to={chatRoomLink} className="chat-btn"/>
                        </div>
                        <VideoHolder courseId={courseId}/>
                        <DocumentList role={this.props.role} files={this.props.files.items} id={this.props.match.params.id}/>
                    </div>
                    :
                    <Redirect to="/Login"/>
                }
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        courses: state.courses.courses,
        coursesList: state.courses.coursesList,
        files: state.courses.files,
        role: state.courses.role
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getFiles: (id) => dispatch(getAllFiles(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseRoom);