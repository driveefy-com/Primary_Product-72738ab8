import  { useState } from 'react'
import ManualOnboardingFormSlides from '../../fleet_Onboarding_Page/manualOnboardingPages/ManualOnboardingFormSlides'
import './styles/FleetDetailDataComponent.scss'
function FleetDetailDataComponent({ title,  fleetData, pageNo, isEditable }) {
        const [selectedColor, setSelectedColor] = useState("");
        const handleChange = (e) => {
            setSelectedColor(e.target.value);
        };

        return (
            <>
                <div className="vehicle-data-title-container">
                    <h2 className='vehicle-data-header'>{title}</h2>
                    {pageNo == '1' && <select
                        name="select"
                        className={`select-input ${selectedColor}`}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="available" className='available'>Available</option>
                        <option value="intransit" className='intransit'>In Transit</option>
                        <option value="maintenance" className='maintenance'>Maintenance</option>
                    </select>}
                </div>

                <div className="vehicle-data-container">
                    <ManualOnboardingFormSlides fleetData={fleetData} pageNo={pageNo} isEditable={isEditable} />
                </div>
            </>
        )
    }

    export default FleetDetailDataComponent