import { useEffect, useState } from 'react'
import './Card.css'

const PointsCard = ({value, setCurrPoints, currPoints}) => {


  
  return (
    <div id={`${currPoints === value?`focus`:``}`} className={`button-behavior card focus`} onClick={() => setCurrPoints(value)}>
      {value}
    </div>
  )
}

export default PointsCard