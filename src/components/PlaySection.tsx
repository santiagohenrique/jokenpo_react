import { Choice } from "../enums/Choice";
import { PlayerData } from "../types";
import { Button } from "./Button";
import { ChoiceContainer } from "./ChoiceContainer";

interface Props {
    playerData: PlayerData,
    handlePlayerChoice: (choice: Choice) => void,
    machineChoice: Choice | undefined
}

export const PlaySection = ( { playerData, handlePlayerChoice, machineChoice }:Props ) => {
    return(
        <section className="play_section">
            <div className="options_container">
                <Button onClick={() => handlePlayerChoice(Choice.Rock)} buttonText="&#x270A;" />
                <Button onClick={() => handlePlayerChoice(Choice.Paper)} buttonText="&#x1F590;" />
                <Button onClick={() => handlePlayerChoice(Choice.Scissors)} buttonText="&#x270C;" />
            </div>
            <ChoiceContainer typeOfPlayer='Jogador' choice={playerData.playerChoice} />
            <ChoiceContainer typeOfPlayer='Máquina' choice={machineChoice} />
        </section>
    );
}