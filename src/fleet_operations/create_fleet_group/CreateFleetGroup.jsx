import React, { useState } from 'react'
import './styles/createFleet.scss'
import leftArrow from '../../assets/icons/backArrow.svg'
import { Link } from 'react-router-dom';
import cross from "../../assets/icons/popUpCross.svg";

function CreateFleetGroup() {
    const [showList, setShowList] = useState(false);
    const [selectedFleets, setSelectedFleets] = useState([]);
    const [fleets,setfleets] = useState(['Fleet 1', 'Fleet 2', 'Fleet 3', 'Fleet 4', 'Fleet 5']);
  console.log(selectedFleets.length);
  
    const toggleFleet = (fleet) => {
      if (!selectedFleets.includes(fleet)) {
        setSelectedFleets([...selectedFleets, fleet]);
        setfleets(fleets.filter(f => f != fleet)); // Remove from available fleets
      }
    };
    const removeFleet = (fleet) => {
      setSelectedFleets(selectedFleets.filter(f => f !== fleet));
      setfleets([...fleets, fleet]); // Add back to available fleets
    };
  
    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // Go to the previous slide
        }
    };
    return (
        <div className="create-fleet-main-container">
            <div className="create-header-container">
                <Link to={'/fleet/fleetGroups'}  ><img src={leftArrow} alt="" className='left-arrow' /></Link>
                <h1 className='manual-onboarding-form-header'>Create Fleet Group</h1>
            </div>
            <h2 className='create-fleet-input-headers'>Group Name</h2>
            <input type="text" className='create-fleet-group-name' placeholder='Enter Group Name' />
            <h2 className='create-fleet-input-headers'>Description</h2>
            <textarea type="" className='create-fleet-group-description' placeholder='Enter Description' />
            <div className="fleets-adding-container">
                <h2 className='create-fleet-input-headers'>Fleet</h2>
                {showList ? (
                    <div className="fleet-popup">
                        <div className="selected-fleets">
                            {selectedFleets.map((fleet) => (
                                <div className="fleet-chip" key={fleet}>
                                    <p>{fleet}</p>
                                    <img src={cross} className="remove" onClick={() => removeFleet(fleet)}/>
                                </div>
                            ))}
                        </div>

                        <div className="fleet-options">
                            {fleets.map((fleet) => (
                                <div
                                    key={fleet}
                                    className="fleet-option"
                                    onClick={() => toggleFleet(fleet)}
                                >
                                    {fleet}
                                </div>
                            ))}
                        </div>
                        <img src={cross} alt="" className="pop-up-cross" onClick={() => setShowList(!showList)}/>
                    </div>
                ):selectedFleets.length>0?selectedFleets.map((item,index)=>{
                    console.log('ff');
                    return (<button className='add-fleet-button' key={index}>{item}</button>)
                }):<button className='add-fleet-button' onClick={() => setShowList(!showList)}>+ Add Fleet</button>}
            </div>
        </div>
    )
}

export default CreateFleetGroup