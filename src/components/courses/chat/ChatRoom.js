import React from "react";
import "../../../assets/styles/chat.css"
import MessageInputHolder from "./MessageInputHolder";
import MessageFlow from "./MessageFlow";


class ChatRoom extends React.Component {

    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return(
            <div className="chat-screen">
                <div className="course-room-panel">
                    <div className="go-back-btn-wrapper course-room">
                        <button className="go-back course-room" onClick={this.onClickGoBack}/>
                    </div>
                    <h5 className="course-chat-name ">Js</h5>
                </div>
                <div className="chat-holder-wrapper">
                    <MessageFlow/>
                    <MessageInputHolder/>
                </div>
            </div>
        )
    }
}

export default ChatRoom;