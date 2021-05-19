import DocumentItem from "./DocumentItem";
import React  from "react";
import '../../assets/styles/document-list.css'
import {uploadFile} from "../../gateway/firebase_gateway";
import {useDispatch} from "react-redux";
import {getAllFiles} from "../../store/actions/coursesActions";

const DocumentList = ({role, files, id}) => {

    const dispatch = useDispatch()

    const handleUploadFile = async (event) => {
        console.log(event.target.files[0].name)
        await uploadFile(event.target.files[0], event.target.files[0].name, id)
        await dispatch(getAllFiles(id))
    }
    return (
        <div className="documents-wrapper">
            <div className="document-list-wrapper">
                { files && files.map((file, id) =>
                    <DocumentItem role={role} key={id} file={file}/>
                )}
            </div>
            { role === "professor" &&
                <div className="arrow-btn add-file-btn">
                    <input type="file" onChange={handleUploadFile} style={{opacity: 0, width: 104}}/>
                </div>


            }

        </div>
    )
}

export default DocumentList;