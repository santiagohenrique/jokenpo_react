import './assets/scss/styles.scss'
import { useGameLogic } from './hooks/useGameLogic'
import { Scoreboard } from './components/Scoreboard'
import { MessageDisplay } from './components/MessageDisplay'
import { PlaySection } from './components/PlaySection'

function App() {

  const { playerData, machineChoice, statistics, message, handlePlayerChoice, handleResetScore } = useGameLogic();

  return (

    <main className="container">
      <div className="container_game">
        <PlaySection playerData={playerData} machineChoice={machineChoice} handlePlayerChoice={handlePlayerChoice} />
        {message && 
        (
          <MessageDisplay message={message} />
        )}
        <Scoreboard statistics={statistics} handleResetScore={handleResetScore} />
      </div>
    </main>

  )
}

export default App
