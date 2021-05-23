import React from "react";
import "../../../assets/styles/chat.css"
import MessageInputHolder from "./MessageInputHolder";
import MessageFlow from "./MessageFlow";
import {getCourses} from "../../../store/actions/coursesActions";
import {connect} from "react-redux";
import {getRealTimeMessage} from "../../../gateway/firebase_gateway";


class ChatRoom extends React.Component {

    state = {
        messages: []
    }
    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }
    async componentDidMount() {
        this.props.getCourses();
        await getRealTimeMessage(this.props.match.params.id, (messages)=>{
            this.setState({
                messages: messages
            })
        })
    }

    render() {
        console.log(this.props.courses)
        let courseName = this.props.courses[this.props.match.params.id].name  ? this.props.courses[this.props.match.params.id].name : ""
        return(
            <div className="chat-screen">
                <div className="course-room-panel">
                    <div className="go-back-btn-wrapper course-room">
                        <button className="go-back course-room" onClick={this.onClickGoBack}/>
                    </div>
                    <h5 className="course-chat-name">{courseName}</h5>
                </div>
                <div className="chat-holder-wrapper">
                    <MessageFlow messages={this.state.messages}/>
                    <MessageInputHolder id={this.props.match.params.id} messages={this.state.messages}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        courses: state.courses.courses
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getCourses: () => dispatch(getCourses()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);