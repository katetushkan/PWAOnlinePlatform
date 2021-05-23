import React from "react";
import "../../../assets/styles/message.css";
import {sendUserMessage} from "../../../gateway/firebase_gateway";

class MessageInputHolder extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    cleanForm = () => {
        this.setState({
            message: ''
        })
    }

    sendMessage = async () => {
        await sendUserMessage(this.state.message, this.props.id)
        this.setState({
            message: ""
        })
        this.cleanForm()
    }

    handleOnSend = async (event) => {
        event.preventDefault();
        await this.sendMessage();
    }

    handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            if (event.shiftKey) {
                event.preventDefault()
                await this.sendMessage()
            }
        }
    }

    render() {
        const { message } = this.state;
        return (
            <div className="message-send-wrapper">
                <form className="message-send">
                    <textarea
                        className="input-message message-text"
                        value={message}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="Text message..."
                    />
                    <button className="sent-btn" onClick={this.handleOnSend}/>
                </form>
            </div>
        )
    }
}

export default MessageInputHolder;