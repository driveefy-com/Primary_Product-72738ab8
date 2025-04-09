import './styles/FleetDetailStatisticsBox.scss'
function FleetDetailStatisticsBoxes({title}) {
  return (
    <div className="fleet-detail-box">
        <h1 className='fleet-detail-box-header'>{title}</h1>
        <p className='fleet-detail-box-count'>NA</p>
    </div>
  )
}

export default FleetDetailStatisticsBoxes