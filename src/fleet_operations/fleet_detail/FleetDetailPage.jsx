import React, { useRef, useState } from 'react'
import './styles/FleetDetailPage.scss'
import PopUpComponent from '../../common/PopUp/popup/PopUpComponent';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import pen from "../../assets/icons/editProfilePictureIcon.svg";
import { fleetDetail, VehicleDataComponents, RegistrationCertificateComponents, InsuranceDetailsComponents, PermitDetailsComponents, PuccDetailsComponents, TaxDetailsComponents, manualOnboardingSlideDetails, organizationDetailAvatarList } from "../../common/form/FormData";
import FleetDetailStatisticsBoxes from './components/FleetDetailStatisticsBoxes';
import { FormComponents } from '../../common/form/FormComponents';
import ManualOnboardingFormSlides from '../fleet_Onboarding_Page/manualOnboardingPages/ManualOnboardingFormSlides'
import FleetDetailDataComponent from './components/FleetDetailDataComponent';
// import leftArrow from '../../../assets/icons/backArrow.svg'
import eye from '../../assets/icons/eyeIcon.svg';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import SubmitButton from '../../common/buttons/SubmitButton';
import download from '../../assets/icons/downloadOption.svg';
import deleteButton from '../../assets/icons/deleteFleetDetail.svg';
import PaddedSubmitButton from '../../common/buttons/PaddedSubmitButton';
import FleetJourneyList from './fleet_journey_list/FleetJourneyList';
function FleetDetailPage() {
    const [activeTab, setActiveTab] = useState('fleetDetail');
    const [searchParams, setSearchParams] = useSearchParams();
    const isPopupOpen = searchParams.get("popup") === "true";
    const [edit, setedit] = useState(false);
    const { savedImage } = useSelector((state) => state?.popup) || "";
    const dispatch = useDispatch();
    const openPopup = () => {
        setSearchParams({ popup: "true" });
    };
    const closePopup = () => {
        setSearchParams({});
    };
    const fleetDetailTaxPuccDetails = [...PuccDetailsComponents, ...TaxDetailsComponents];
    const [fileInfo, setFileInfo] = useState([]);
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
            url: fileUrl,
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
    const handleEditClick = (event) => {
        console.log('nn');
        event.preventDefault();
        setedit(true);
    };
    const handleCancel = (event) => {
        event.preventDefault();
        setedit(false);
    };
    return (
        <div className="fleet-detail-main-container">
            <div className="fleet-detail-top-container">
                <div className="fleet-detail-header-container">
                    <div>
                        <h1 className={activeTab === "fleetDetail" ? "fleet-detail-active-header" : "fleet-detail-header"}
                            onClick={() => setActiveTab("fleetDetail")}>Fleet Detail</h1>
                        <hr className={activeTab === "fleetDetail" ? 'fleet-detail-hr-blue' : 'fleet-detail-hr'} />
                    </div>
                    <div>
                        <h1 className={activeTab === "journeyList" ? "fleet-detail-active-header" : "fleet-detail-header"} onClick={() => setActiveTab("journeyList")}>Jouney List</h1>
                        <hr className={activeTab === "journeyList" ? 'fleet-detail-hr-blue' : 'fleet-detail-hr'} />
                    </div>
                </div>
                <div className="fleet-detail-edit-container">
                    <div className="fleet-detail-edit-button">
                        <PaddedSubmitButton text={'Edit'} type={'button'} onClick={handleEditClick} />
                    </div>
                    <div className="fleet-detail-img-container">
                        <img src={download} alt="" className='fleet-detail-img' />
                        <img src={deleteButton} alt="" className='fleet-detail-delete-img' />
                    </div>
                </div>
            </div>
            {activeTab == 'fleetDetail' ? <>
                <div className="fleet-detail-container">
                    <h2 className='fleet-profile-picture-header'>Fleet Profile Picture</h2>
                    <div className="fleet-profile-picture-container">
                        <div className="fleet-profile-photo-container">
                            <div
                                className="organization-dp-container"
                                style={{ backgroundImage: savedImage ? `url(${savedImage})` : "none" }}
                            ></div>
                            <img
                                src={pen}
                                className="fleet-detail-pen-icon"
                                alt="Edit Profile"
                                onClick={openPopup}
                            />
                        </div>
                        {edit ? <div className="manual-pop-up-container">
                            {<PopUpComponent isOpen={isPopupOpen} onClose={closePopup} avatarList={organizationDetailAvatarList} />}
                        </div> : ''}
                        <div className="fleet-detail-statistics-container">
                            <FleetDetailStatisticsBoxes title={'Order Count'} />
                            <FleetDetailStatisticsBoxes title={'Journey Count'} />
                            <FleetDetailStatisticsBoxes title={'Average Mileage'} />
                            <FleetDetailStatisticsBoxes title={'Total Earnings'} />
                        </div>
                    </div>
                    {manualOnboardingSlideDetails.slice(0, 4).map((item, index) => {
                        return (
                            <FleetDetailDataComponent key={index} fleetData={item.fleetDetail} pageNo={item.pageNo} title={item.header} text={'Available'} isEditable={!edit} />
                        )
                    })}
                    <FleetDetailDataComponent key={5} fleetData={fleetDetailTaxPuccDetails} pageNo={'5'} title={'TAX/PUCC Details'} isEditable={!edit} />
                    <div className="fleet-detail-document-list-container">
                        <div className='vehicle-data-header'> Documents List</div>
                        <div className="fleet-detail-document-list-container">
                            <div className="submit-slide-table-container" style={{ marginBottom: '5%' }}>
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
                                        disabled={!edit}
                                        hidden
                                    />
                                    Browse Files</button>
                            </form>
                            <div className="manual-onboarding-button-container">
                            </div>
                        </div>
                    </div>
                </div>
                {edit && <div className="fleet-detail-button-container">
                    <PaddedSubmitButton text={'Cancel'} onClick={handleCancel} />
                    <PaddedSubmitButton text={'Update Changes'} />
                </div>}</> :<FleetJourneyList/>}
        </div>

    )
}

export default FleetDetailPage