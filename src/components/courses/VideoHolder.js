import React from "react";
import "../../assets/styles/video-holder.css"
import {connect} from "react-redux";
import RecordRTCPromisesHandler from "recordrtc"
import {saveStream} from "../../gateway/firebase_gateway";
import {getAllFiles} from "../../store/actions/coursesActions";

class VideoHolder extends React.Component{


    recordVideo = async () => {
        const constr = {
            video: true,
            audio: true
        };

        navigator.mediaDevices.getUserMedia(constr).then((mediaStream) =>{
            let video = document.querySelector('video')
            let title = document.querySelector('.record-title')
            video.srcObject = mediaStream
            video.onloadedmetadata = function (event){
                video.play();
            }
            title.innerText = "Start recording..."
            let mediaRecorder = new RecordRTCPromisesHandler (mediaStream, {
                type: 'video/webm;codecs=h264',
                mimeType: 'video/webm;codecs=vp8'
            })
            mediaRecorder.startRecording()

            let stopDownload = document.querySelector(".save-btn")
            stopDownload.addEventListener('click', async ()=>{
                mediaRecorder.stopRecording(async()=>{
                    title.innerText = "Stop recording..."
                    video.pause()
                    let blob = await mediaRecorder.getBlob()
                    title.innerText = "Saving record..."
                    await saveStream(blob, this.props.courseId)
                    await this.props.getFiles(this.props.courseId)
                    title.innerText = "Record saved"
                    video.srcObject = null
                })
            })

        })
    }


    render() {
        return (
            <div className="video-wrapper">
                <video className="video-holder"/>
                <div className="video-btn-wrapper">
                    {this.props.role === "professor" &&
                        <>
                            <h3 className="record-title"/>
                            <button onClick={this.recordVideo} className="record-btn"/>
                            <button className="save-btn"/>
                        </>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        coursesList: state.courses.coursesList,
        role: state.courses.role
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getFiles: (id) => dispatch(getAllFiles(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (VideoHolder);