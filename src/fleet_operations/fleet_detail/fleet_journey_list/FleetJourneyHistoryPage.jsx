import PopUpComponent from '../../../common/PopUp/popup/PopUpComponent';
import { useSearchParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import pen from "../../../assets/icons/editProfilePictureIcon.svg";
import { fleetJourneyList,  journeyHistoryTitles, organizationDetailAvatarList } from "../../../common/form/FormData";
import './styles/FleetJourneyHistoryPage.scss'
import EyeOpen from "../../../assets/icons/EyeOpen.svg";
import ManualOnboardingFormSlides from '../../fleet_Onboarding_Page/manualOnboardingPages/ManualOnboardingFormSlides';
function FleetJourneyHistoryPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isPopupOpen = searchParams.get("popup") === "true";
    const { savedImage } = useSelector((state) => state?.popup) || "";
    const openPopup = () => {
        setSearchParams({ popup: "true" });
    };
    const closePopup = () => {
        setSearchParams({});
    };
    return (
        <div className="journey-history-main-container">
            <div className="fleet-detail-container">
                <h2 className='fleet-profile-picture-header'>Fleet Profile Picture</h2>
                <div className="fleet-journey-profile-picture-container">
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
                    <div className="manual-pop-up-container">
                        {<PopUpComponent isOpen={isPopupOpen} onClose={closePopup} avatarList={organizationDetailAvatarList} />}
                    </div>
                </div>
            </div>
            <h2 className='fleet-journey-content-header'>Vehicle Data</h2>
            <ManualOnboardingFormSlides fleetData={journeyHistoryTitles} pageNo={'1'} isEditable={true} />
            <h2 className='fleet-journey-content-header'>Order List</h2>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {fleetJourneyList.map((item, index) => {
                                return (<th key={index}>{item}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>cc</td>
                            <td>cc</td>
                            <td>cc</td>
                            <td>cc</td>
                            <td>cc</td>
                            <td>cc</td>
                            <td>cc</td>
                            <td>cc</td>
                            <td><img src={EyeOpen} alt="" className='fleet-history-eye-icon' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FleetJourneyHistoryPage