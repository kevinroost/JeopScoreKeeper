import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PointsCard from './components/cards/PointsCard'
import PlayerCard from './components/cards/PlayerCard'
import './App.css'

function App() {
  const [factor, setFactor] = useState(100)
  const [currPoints, setCurrPoints] = useState(0)
  const myPlayers = [
    {name: `Kevin`, score: 0}, 
    {name: `Jake`, score: 0}, 
    {name: `Caitlyn`, score: 0}, 
  ]
  const [players, setPlayers] = useState(myPlayers)
  
  return (
    <div className='col'>
      <div className='row'>
        <div className='button-behavior card' onClick={() => setFactor(100)}>
          <p>Single Jeop</p>
        </div>
        <div className='button-behavior card' onClick={() => setFactor(200)}>
          <p>Double Jeop</p>
        </div>
        <div className='button-behavior card' onClick={() => setFactor(300)}>
          <p>Triple Jeop</p>
        </div>
      </div>
      <div className='row'>
        <div>
          <PointsCard 
            value={factor*1}
            setCurrPoints={setCurrPoints}
            currPoints={currPoints}
            />
          <PointsCard 
            value={factor*2}
            currPoints={currPoints}
            setCurrPoints={setCurrPoints}
            />
          <PointsCard 
            value={factor*3}
            currPoints={currPoints}
            setCurrPoints={setCurrPoints}
            />
          <PointsCard 
            value={factor*4}
            currPoints={currPoints}
            setCurrPoints={setCurrPoints}
            />
          <PointsCard 
            value={factor*5}
            currPoints={currPoints}
            setCurrPoints={setCurrPoints}
            />
        </div>
        <div className='col'>
          {
            players.map((player, i) => (
              <PlayerCard
                key={player.name}
                player={player}
                currPoints={currPoints}
                index={i}
                setPlayers={setPlayers}
                players={players}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
