import { useEffect, useState } from 'react'
import './Card.css'

const PlayerCard = ({player, currPoints, i, setPlayers, players}) => {
  const [updatedScore, setUpdatedScore] = useState(player.score)
  
  const subtractPoints = () => {
    player.score -= parseInt(currPoints)
    setUpdatedScore(player.score)
  }
  
  const addPoints = () => {
    player.score += parseInt(currPoints)
    setUpdatedScore(player.score)
  }
  
  useEffect(() => {
    const newPlayersArr = [...players]
    newPlayersArr[i] = player
    setPlayers(newPlayersArr)
  }, [player.score])
  
  return (
    <div className='card'>
      <div>
        {player.name}: {updatedScore}
      </div>
      <div className='row'>
        <div onClick={() => subtractPoints()} className='pad-p button-behavior'>Incorrect</div>
        <div onClick={() => addPoints()} className='pad-p button-behavior'>Correct</div>
      </div>
    </div>
  )
}

export default PlayerCard