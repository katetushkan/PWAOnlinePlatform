import React from "react";
import TimeStampChatHistory from "./TimeStampChatHistory";
import MessageReceive from "./MessageReceive";
import MessageSend from "./MessageSend";
import {useSelector} from "react-redux";

const MessageFlow = ({messages}) => {

    const uid = useSelector(state => state.auth.user.uid)

    const sortMessage = (message, prevMessage, uid) => {
        if (prevMessage == null){

            if (message.uid === uid){
                // return MessageReceive
                const date = new Date(message.createdAt)
                return <>
                    <TimeStampChatHistory date={date}/>
                    <MessageSend message={message}/>
                    </>


            }
            else {
                // return MessageSend
                return <>
                    <MessageReceive message={message}/>
                    </>

            }
        }
        if (message == null){
            if (prevMessage.uid === uid){
                // return MessageReceive
                const date = new Date(prevMessage.createdAt)
                return <>
                    <TimeStampChatHistory date={date}/>
                    <MessageReceive message={prevMessage}/>
                </>


            }
            else {
                // return MessageSend
                return <>
                    <MessageSend message={prevMessage}/>
                </>

            }
        }
        const deltaTime = Math.abs(message.createdAt - prevMessage.createdAt)
        if (message.uid === uid){
            // return MessageReceive
            if (deltaTime >= 60 * 60 * 24 * 1000){
                const date = new Date(message.createdAt)
                return <>
                    <TimeStampChatHistory date={date}/>
                    <MessageSend message={message}/>
                </>
            }
            else {
                return <>
                    <MessageSend message={message}/>
                </>
            }

        }
        else {
            // return MessageSend
            if (deltaTime >= 60 * 60 * 24 * 1000){
                const date = new Date(message.createdAt)
                return <>
                    <TimeStampChatHistory date={date}/>
                    <MessageReceive message={message}/>
                </>
            }
            else {
                return <>
                    <MessageReceive message={message}/>
                </>
            }
        }
    }
    return (
        <div className="chat-wrapper">
            <div className="message-flow-wrapper">
                {messages && messages.map((message, index) => sortMessage(message, messages[index-1], uid))}
            </div>
        </div>
    )
}

export default MessageFlow;