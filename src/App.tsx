import { useState } from 'react'
import { Button } from './assets/components/Button'
import { ChoiceContainer } from './assets/components/ChoiceContainer'
import { ScoreboardBox } from './assets/components/ScoreboardBox'
import './assets/scss/styles.scss'

function App() {

  const [playerChoice, setPlayerChoice] = useState<string | undefined>();
  const [machineChoice, setMachineChoice] = useState<string | undefined>();

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice)
    handleMachineChoice()
  }

  const handleMachineChoice = () => {
    const randomNumber = Math.random();
    if(randomNumber <= 0.33){
      setMachineChoice("✊")
    } else if (randomNumber <= 0.66) {
      setMachineChoice("🖐️")
    } else{
      setMachineChoice("✌️")
    }
  }

  const handleResetScore = () => {
    alert('teste')
  }

  return (

    <main className="container">
      <div className="container_game">
        <section className="play_section">
          <div className="options_container">
            <Button onClick={() => handlePlayerChoice("✊")} buttonText="&#x270A;" />
            <Button onClick={() => handlePlayerChoice("🖐️")} buttonText="&#x1F590;" />
            <Button onClick={() => handlePlayerChoice("✌️")} buttonText="&#x270C;" />
          </div>
          <ChoiceContainer typeOfPlayer='Jogador' choice={playerChoice} />
          <ChoiceContainer typeOfPlayer='Máquina' choice={machineChoice} />
        </section>
        <section className="scoreboard_section">
          <div className='scoreboard_container'>
            <ScoreboardBox text='V: 0' />
            <ScoreboardBox text='D: 0' />
            <ScoreboardBox text='E: 0' />
          </div>
          <Button onClick={handleResetScore} buttonText="Reiniciar placar" customClassName="scoreboard_button" />
        </section>
      </div>
    </main>

  )
}

export default App
