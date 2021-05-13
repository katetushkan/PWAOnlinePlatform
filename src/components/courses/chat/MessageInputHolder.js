import React from "react";
import "../../../assets/styles/message.css";

class MessageInputHolder extends React.Component {

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div className="message-sent-wrapper">
                <div className="message-send">
                    <input className="input-message message-text" onChange={this.handleChange} type="text" placeholder="Text message..."/>
                    <button className="sent-btn"/>
                </div>
            </div>
        )
    }
}

export default MessageInputHolder;