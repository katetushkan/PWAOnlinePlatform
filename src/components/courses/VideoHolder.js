import React from "react";
import "../../assets/styles/video-holder.css"

class VideoHolder extends React.Component{
    render() {
        return (
            <div className="video-wrapper">
                <video className="video-holder"/>
                <div className="video-btn-wrapper">
                    <button className="record-btn"/>
                    <button className="save-btn"/>
                </div>
            </div>
        )
    }
}

export default VideoHolder;