import { useEffect, useState } from 'react'
import './Card.css'

const InputCard = ({value, setCurrPoints, currPoints}) => {

  const [bet, setBet] = useState(0)

  useEffect(() => {
    setCurrPoints(bet)
  }, [bet, setCurrPoints])

  
  return (
    <div id={`${currPoints === value?`focus`:``}`} className={`button-behavior card focus`} onClick={() => setCurrPoints(value)}>
      <input type="text" value={bet} onChange={e => setBet(e.target.value)}/>
    </div>
  )
}

export default InputCard