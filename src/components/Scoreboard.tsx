import { Button } from './Button';
import { ScoreboardBox } from './ScoreboardBox';
import { Statistics } from '../types'; 

interface Props{
    statistics: Statistics;
    handleResetScore: () => void;
}

export const Scoreboard = ({ statistics, handleResetScore }: Props) => {
    return (
    <section className="scoreboard_section">
        <div className='scoreboard_container'>
            <ScoreboardBox text={`V: ${statistics.wins}`} />
            <ScoreboardBox text={`D: ${statistics.losses}`} />
            <ScoreboardBox text={`E: ${statistics.draws}`} />
        </div>
        <Button onClick={handleResetScore} buttonText="Reiniciar placar" customClassName="scoreboard_button" />
    </section>
    );
}