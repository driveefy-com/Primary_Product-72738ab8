import React, { useState } from 'react'
import './styles/ProfilePage.scss'
import { personalDetails } from '../../common/form/FormData'
import { FormComponents } from '../../common/form/FormComponents'
import { organizationDetail } from '../../common/form/FormData'
import { useSelector } from 'react-redux'
import SubmitButton from '../../common/buttons/SubmitButton'
function ProfilePage() {
    const { savedImage } = useSelector((state) => state?.popup) || "";
    const [edit, setedit] = useState(false);
    const handleEditClick = (event) => {
        console.log('nn');
        event.preventDefault(); 
        setedit(true);
    };

    const handleSaveClick = (event) => {
        event.preventDefault(); 
        setedit(false);
        // Handle saving logic here
    };

    const handleCancelClick = (event) => {
        event.preventDefault(); 
        setedit(false);
        // Optionally reset form data
    };
    return (
        <div className="profile-page-container">
            <div className="profile-page-background-container">
            </div>
            <div className="profile-page-form-container">
                <form action="">
                    <div className="dp-button-container">
                        <div
                            className="organization-dp-container"
                            style={{ backgroundImage: savedImage ? `url(${savedImage})` : "none" }}
                        ></div>
                        {edit ? <div className="submit-button-container" onClick={(e)=>handleSaveClick(e)}>
                            <SubmitButton text={'Save'} type={'Submit'} />
                             <button className='cancel-button'>Cancel</button>
                        </div> : <div  className="submit-button-container" onClick={(e)=>handleEditClick(e)}>
                            <SubmitButton text={'Edit'} type={'button'} />
                        </div>}
                    </div>
                    <div className="personal-details-container">
                        {personalDetails.map((item, index) => (
                            <div key={index} className="grid-items">
                                <h1 className='grid-item-header'>{item.name || ""}</h1>
                                <FormComponents
                                    key={index}
                                    formData={item}
                                    isEditable={!edit}
                                    onChange={() => { }}
                                />
                            </div>
                        ))}
                    </div>
                    <h1 className='organization-header'>Organization Detail</h1>
                    <div className="organization-form-container">
                        {Array.isArray(organizationDetail) && organizationDetail.map((item, index) => (
                            item ? (
                                <div key={index} className="grid-item">
                                    <h1>{item.name || ""}</h1>
                                    <FormComponents
                                        key={index}
                                        formData={item}
                                        isEditable={!edit}
                                        onChange={() => { }}
                                    />
                                </div>
                            ) : null
                        ))}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfilePage