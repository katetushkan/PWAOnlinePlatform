import React from "react";
import '../../assets/styles/document-item.css'
import {deleteFile, downloadFile} from "../../gateway/firebase_gateway";
import {useDispatch} from "react-redux";
import {getAllFiles} from "../../store/actions/coursesActions";

const DocumentItem = ({role, file, key}) => {

    const dispatch = useDispatch()

    const handleDelete = async () => {
        console.log(file.fullPath)
        await deleteFile(file.fullPath)
        await dispatch(getAllFiles(key))
    }

    const handleDownload = async () => {
        const downloadUrl = await downloadFile(file.fullPath)
        window.open(downloadUrl, '_blank').focus()
    }
    return (
        <div className="document-wrapper">
            <div className="document-content">
                <a onClick={handleDownload} className='file-name'>{file.name}</a>
                { role === "professor" && <button onClick={handleDelete} className="del-btn"/>}
            </div>
            <div className="border"/>
        </div>
    )
}

export default DocumentItem;