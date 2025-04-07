import { useState } from 'react'
import {  useSelector } from 'react-redux'
import pen from "../../../assets/icons/editProfilePictureIcon.svg";
import { useSearchParams } from 'react-router-dom';
import {  organizationDetailAvatarList } from '../../../common/form/FormData';
import { FormComponents } from '../../../common/form/FormComponents';
import PaddedSubmitButton from '../../../common/buttons/PaddedSubmitButton'
import ArrowRight from '../../../assets/icons/ArrowRight.svg'
import './styles/FleetManualOnboarding.scss'
import leftArrow from '../../../assets/icons/backArrow.svg'
import PopUpComponent from '../../../common/PopUp/popup/PopUpComponent';
function ManualOnboardingFormSlides({ onClick, fleetData, pageNo, header,hasPicture, previous,buttonText,isEditable }) {
    console.log(isEditable);
    
    const { savedImage } = useSelector((state) => state?.popup) || "";
    const [searchParams, setSearchParams] = useSearchParams();
    const isPopupOpen = searchParams.get("popup") === "true";
    const [formData] = useState({ 'profilePhoto': null, 'organisationAddress': 'gggtg' });
    const openPopup = () => {
        setSearchParams({ popup: "true" });
    };
    const closePopup = () => {
        setSearchParams({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('gg');
        onClick();
    }
    return (
        <div className="manual-onboarding-form-container">
            {pageNo!='1' && previous && <img src={leftArrow} alt="" className='left-arrow' onClick={previous} />}
            {header && <h1 className='manual-onboarding-form-header'>{header}</h1>}
            {hasPicture &&
            <>
                <div className="manual-onboarding-photo-container">
                    <div
                        className="organization-dp-container"
                        style={{ backgroundImage: savedImage ? `url(${savedImage})` : "none" }}
                    ></div>
                    <img
                        src={pen}
                        className="manual-onboarding-pen-icon"
                        alt="Edit Profile"
                        onClick={openPopup}
                    />
                </div>
                <div className="manual-pop-up-container">
                    <PopUpComponent isOpen={isPopupOpen} formData={formData} onClose={closePopup} avatarList={organizationDetailAvatarList} />
                </div>
                </>
            }
            <form className="manual-onboarding-form" onSubmit={handleSubmit}>
                {Array.isArray(fleetData) && fleetData.map((item, index) => (
                    item ? (
                        <div key={index} className={pageNo == '1' ? "manual-onboarding-grid-item" : "manual-onboarding-two-grid-item"}>
                            <h1 className='manual-onboarding-form-title'>{item.name || ""}</h1>
                            <FormComponents
                                key={index}
                                formData={item}
                                isEditable={isEditable}
                            //   onChange={handleChange}
                            />
                        </div>
                    ) : null
                ))}
                { buttonText && <div className="manual-onboarding-button-container">
                    <PaddedSubmitButton text={buttonText} type={''} img={ArrowRight} />
                    <p className='manual-onboarding-skip' onClick={onClick}>Skip</p>
                </div>}
            </form>
        </div>
    )
}

export default ManualOnboardingFormSlides;