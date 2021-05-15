import React from "react";
import '../../assets/styles/document-item.css'

const DocumentItem = () => {
    return (
        <div className="document-wrapper">
            <div className="document-content">
                <a className='file-name'>Lection 1.pdf</a>
                <button className="del-btn"/>
            </div>
            <div className="border"/>
        </div>
    )
}

export default DocumentItem;