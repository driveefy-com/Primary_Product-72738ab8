import './styles/PaddedSubmitButton.scss'

function PaddedSubmitButton({text,type,img,onClick}) {
  return (
    <button className='padded-submit-button' type={type} onClick={onClick}>{text}
   {img &&<img src={img} alt="" className='arrow-right'/>}
    </button>
  )
}

export default PaddedSubmitButton