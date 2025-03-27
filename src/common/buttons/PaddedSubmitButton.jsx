import './styles/PaddedSubmitButton.scss'

function PaddedSubmitButton({text,type,img}) {
  return (
    <button className='padded-submit-button' type={type}>{text}
   {img &&<img src={img} alt="" className='arrow-right'/>}
    </button>
  )
}

export default PaddedSubmitButton