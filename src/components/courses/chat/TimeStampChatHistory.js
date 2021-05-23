import React from "react";
import "../../../assets/styles/time-stamp.css"

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const TimeStampChatHistory = ({date}) => {
    return (
        <div className="timestamp-wrapper">
            <div className="timestamp">
                <h3 className="message-date">{`${date.getDate()} ${monthNames[date.getMonth()]}`}</h3>
            </div>
        </div>
    );
}

export default TimeStampChatHistory;