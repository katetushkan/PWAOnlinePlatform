import React from "react";
import "../../../assets/styles/message.css"

const MessageReceive = ({message}) => {

    const formatTime = (time) =>{
        let formatString = new Date(time)
            .toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            .replace(" ", "")

        return formatString
    }

    return (
        <div className="message-wrapper">
            { message.photoURL ?
                <img alt={message.user} src={message.photoURL} className="message-icon"/>
                :
                <div className="message-icon">A</div>
            }
            <div className="message-placeholder-wrapper">
                <div className="message-placeholder">
                    <h3 className="message-text ">{message.body}</h3>
                    <h6 className="message-timestamp ">{formatTime(message.createdAt)}</h6>
                </div>
                <h6 className="author-name">{message.user}</h6>
            </div>
        </div>
    )
}

export default MessageReceive;