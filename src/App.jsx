import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PointsCard from './components/cards/PointsCard'
import PlayerCard from './components/cards/PlayerCard'
import InputCard from './components/cards/InputCard'
import './App.css'

function App() {
  const [factor, setFactor] = useState(200)
  const [currPoints, setCurrPoints] = useState(0)
  const myPlayers = [
    {name: `Kevin`, score: 0}, 
    {name: `Jake`, score: 0}, 
    {name: `Caitlyn`, score: 0}, 
  ]
  const [players, setPlayers] = useState(myPlayers)
  console.log(currPoints);
  
  return (
    <div className='col'>
      <div className='row'>
        <div className='button-behavior card' onClick={() => setFactor(100)}>
          <p>x100</p>
        </div>
        <div className='button-behavior card' onClick={() => setFactor(200)}>
          <p>x200</p>
        </div>
        <div className='button-behavior card' onClick={() => setFactor(300)}>
          <p>x300</p>
        </div>
        <div className='button-behavior card' onClick={() => setFactor(400)}>
          <p>x400</p>
        </div>
        <div className='button-behavior card' onClick={() => setFactor(600)}>
          <p>x600</p>
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
          <InputCard
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
