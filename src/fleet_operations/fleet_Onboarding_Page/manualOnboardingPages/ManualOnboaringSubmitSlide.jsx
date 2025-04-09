import  { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import PaddedSubmitButton from '../../../common/buttons/PaddedSubmitButton'
import leftArrow from '../../../assets/icons/backArrow.svg'
import './styles/ManualOnboardingSubmitSlide.scss'
import eye from '../../../assets/icons/eyeIcon.svg';
import deleteIcon from '../../../assets/icons/deleteIcon.svg';
function ManualOnboardingSubmitSlide({  previous }) {
    const [fileInfo, setFileInfo] = useState([]);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        // e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger file input click
        }
    };
    const handleClick = (e) => {
        const file = e?.target?.files?.[0];
        if (!file) return;

        const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword", "image/jpg"];

        if (!allowedTypes.includes(file.type)) {
            dispatch({
                type: "SET_SNACKBAR_MESSAGE",
                payload: {
                    message: "The following file type is not allowed!",
                    endColor: "#f17d73",
                    startColor: "#ffe2e0",
                },
            });
            e.target.value = "";
            return;
        }
        const fileUrl = URL.createObjectURL(file);

        // Add valid file to state
        const newFile = {
            name: file.name,
            size: (file.size / 1024).toFixed(2) + " KB",
            type: file.type,
            date: new Date().toLocaleDateString(),
            url:fileUrl,
        };

        setFileInfo((prevFiles) => [...prevFiles, newFile]); // ✅ Now works correctly

        // Read file (optional, if you need to preview images)
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log("File Loaded:", reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleView = (fileUrl) => {

        window.open(fileUrl, "_blank");
    };

    // 🔹 Delete File Function
    const handleDelete = (index) => {
        setFileInfo((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="manual-onboarding-submit-form-container">
            <img src={leftArrow} alt="" className='submit-left-arrow' onClick={previous} />
            <div className="submit-container-header-container">
                <h1 className='manual-onboarding-submit-form-header'>Upload Files</h1>
                <h2 className='submit-slide-file-size'>File size: 10mb/file</h2>
            </div>
            <form className="submit-slide-form">
                <img src="" alt="" />
                <h3 className='submit-slide-form-title'>Choose a file or drag & drop it here</h3>
                <p className='submit-slide-form-content'>Allowed formats PDF,DOC,JPEG,JPG,PNG</p>
                <button type='button' className='submit-slide-browse-option' onClick={handleButtonClick}>
                    <input
                        type="file"
                        accept="image/png, image/jpeg,image/pdf,image/doc,image/jpg"
                        ref={fileInputRef}
                        onChange={handleClick}
                        hidden
                    />
                    Browse Files</button>
            </form>
            <div className='document-list-title'>Uploaded Documents List</div>
            <div className="submit-slide-table-container">
                <table className="custom-table">
                    <thead className='table-header'>
                        <tr>
                            <td>Document Name:</td>
                            <td>Size|Format:</td>
                            <td>Upload Date:</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    {fileInfo.length > 0 && (<tbody >

                        {fileInfo.map((file, index) => (
                            <tr key={index}>
                                <td>{file.name}</td>
                                <td>{file.size} | {file.type}</td>
                                <td>{file.date}</td>
                                <td><img src={eye} alt="" className='table-icon' onClick={() => handleView(file.url)} /></td>
                                <td><img src={deleteIcon} alt="" className='table-icon' onClick={() => handleDelete(index)} /></td>
                            </tr>
                        ))}
                    </tbody>)}
                </table>
            </div>
            <div className="manual-onboarding-button-container">
                <PaddedSubmitButton text={'Submit'} type={''} />
            </div>
        </div>
    )
}

export default ManualOnboardingSubmitSlide;