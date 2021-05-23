import React from "react";
import "../../../assets/styles/message.css"

const MessageSend = ({message}) => {

    const formatTime = (time) =>{
        let formatString = new Date(time)
            .toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            .replace(" ", "")
        console.log(message)
        return formatString
    }

    return (

        <div className="message-wrapper from">

            <div className="message-placeholder-wrapper from">
                <div className="message-placeholder">
                    <h3 className="message-text from">{message.body}</h3>
                    <h6 className="message-timestamp from">{formatTime(message.createdAt)}</h6>
                </div>
                <h6 className="author-name from">{message.user}</h6>
            </div>
            { message.photoURL ?

                <img alt={message.user} src={message.photoURL} className="message-icon"/>
                :
                <div className="message-icon">A</div>
            }
        </div>
    )
}

export default MessageSend;