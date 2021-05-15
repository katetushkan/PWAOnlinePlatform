import React from "react";
import "../../../assets/styles/message.css"

const MessageReceive = () => {
    return (
        <div className="message-wrapper">
            <div className="message-icon">A</div>
            <div className="message-placeholder-wrapper">
                <div className="message-placeholder">
                    <h3 className="message-text "> guys, so today i was
                        working with ESCF-1125</h3>
                    <h6 className="message-timestamp ">12:30pm</h6>
                </div>
                <h6 className="author-name">Arkadi Parovozov</h6>
            </div>
        </div>
    )
}

export default MessageReceive;