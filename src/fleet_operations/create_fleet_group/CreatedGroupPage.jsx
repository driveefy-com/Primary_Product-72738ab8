import  { useState } from 'react'
import './styles/CreatedGroupPage.scss'
import SubmitButton from '../../common/buttons/SubmitButton'
import { Link } from 'react-router-dom'
import leftArrow from '../../assets/icons/backArrow.svg'
import AddFleetComponent from './components/AddFleetComponent'

function CreatedGroupPage() {
    const [openPopup, setopenPopup] = useState(false);
    const handleClick = () => {
        setopenPopup(true);
    }
    return (
        <div className="created-group-main-container">
        <div className="created-group-page-container">
        <Link to={'/fleet/fleetGroups'} ><img src={leftArrow} alt="" className='arrow-created'/></Link>
            <div className="created-group-top">
                <div>
                    <h1 className='created-page-header'>NA</h1>
                    <p className='created-page-desc'>NA</p>
                </div>
                <div className='button-container'>
                    <SubmitButton text={'+ Add Fleet'} onClick={handleClick}/>
                </div>
            {openPopup && <div className="add-fleet-component-container"><AddFleetComponent groupName={'Group 1'} onClose={() => setopenPopup(false)} onAdd={(selectedFleets) => { console.log(selectedFleets); setopenPopup(false); }} /></div>}
            </div>
            <div className="added-fleets-container">
                <div className='added-fleet'>
                    <img src="" alt="" className='added-fleet-img' />
                    <p>Fleet A</p>
                </div>
                <div className='added-fleet'>
                    <img src="" alt="" className='added-fleet-img' />
                    <p>Fleet A</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CreatedGroupPage