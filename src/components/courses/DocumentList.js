import DocumentItem from "./DocumentItem";
import React from "react";
import '../../assets/styles/document-list.css'

const DocumentList = () => {
    return (
        <div className="documents-wrapper">
            <div className="document-list-wrapper">
                <DocumentItem/>
                <DocumentItem/>
                <DocumentItem/>
            </div>
            <button className="arrow-btn add-file-btn"/>
        </div>
    )
}

export default DocumentList;