import React from "react";
import "../../../assets/styles/message.css"

const MessageSend = () => {
    return (
        <div className="message-wrapper from">

            <div className="message-placeholder-wrapper from">
                <div className="message-placeholder">
                    <h3 className="message-text from">Hi, morning guys, so today i was
                        working with ESCF-1125</h3>
                    <h6 className="message-timestamp from">12:30pm</h6>
                </div>
                <h6 className="author-name from">Anton Ivanov</h6>
            </div>
            <div className="message-icon from">A</div>
        </div>
    )
}

export default MessageSend;