import SubmitButton from '../common/buttons/SubmitButton'
import { FormComponents } from '../common/form/FormComponents'
import { organizationDetail } from '../common/form/FormData'
import './styles/OrganizationDetail.scss'
export const OrganizationDetail = () => {
  return (
    <div className="organization-main-container">
      <div className="organization-text-container">
        <div className="organization-title-container">
          <h1>Organization Detail</h1>
        </div>
        <div className="organization-photo-container">

        </div>
        
          <form action=""  className="organization-form-container">
            {organizationDetail.map((item,index)=>{
              return(
                <div className="grid-item">
                <h1>{item.name}</h1>
                <FormComponents key={index} formData={item} onChange={()=>{}}/>
                </div>
              )
            })}
            <div className="organization-submit-button-container">
            <SubmitButton text={'Submit'}/>
            </div>
          </form>
        
      </div>
    </div>
  )
}
