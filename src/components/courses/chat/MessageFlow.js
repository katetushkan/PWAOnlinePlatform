import React from "react";
import TimeStampChatHistory from "./TimeStampChatHistory";
import MessageReceive from "./MessageReceive";
import MessageSend from "./MessageSend";

const MessageFlow = () => {
    return (
        <div className="chat-wrapper">
            <div className="message-flow-wrapper">
                <TimeStampChatHistory/>
                <MessageReceive/>
                <MessageSend/>
            </div>
        </div>
    )
}

export default MessageFlow;