import React from 'react'
import { Button } from './assets/components/Button'
import { ChoiceContainer } from './assets/components/ChoiceContainer'
import { ScoreboardBox } from './assets/components/ScoreboardBox'
import './assets/scss/styles.scss'
import { useGameLogic, Choice } from './hooks/useGameLogic'

function App() {

  const { playerChoice, machineChoice, statistics, message, handlePlayerChoice, handleResetScore } = useGameLogic();

  return (

    <main className="container">
      <div className="container_game">
        <section className="play_section">
          <div className="options_container">
            <Button onClick={() => handlePlayerChoice(Choice.Rock)} buttonText="&#x270A;" />
            <Button onClick={() => handlePlayerChoice(Choice.Paper)} buttonText="&#x1F590;" />
            <Button onClick={() => handlePlayerChoice(Choice.Scissors)} buttonText="&#x270C;" />
          </div>
          <ChoiceContainer typeOfPlayer='Jogador' choice={playerChoice} />
          <ChoiceContainer typeOfPlayer='Máquina' choice={machineChoice} />
        </section>
        {message && 
        (
          <React.Fragment>
            <div className={`message_container ${message === 'Você venceu!' ? 'win' : message === 'Você perdeu!' ? 'lose' : 'draw'}`}>
              <span className="message">{message}</span>
            </div>
          </React.Fragment>
        )}
        <section className="scoreboard_section">
          <div className='scoreboard_container'>
            <ScoreboardBox text={`V: ${statistics.wins}`} />
            <ScoreboardBox text={`D: ${statistics.losses}`} />
            <ScoreboardBox text={`E: ${statistics.draws}`} />
          </div>
          <Button onClick={handleResetScore} buttonText="Reiniciar placar" customClassName="scoreboard_button" />
        </section>
      </div>
    </main>

  )
}

export default App
