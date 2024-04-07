import { useCallback, useEffect, useState } from 'react'

export enum Choice {
    Rock = "✊",
    Paper = "🖐️",
    Scissors = "✌️"
}

interface Statistics {
    wins: number;
    losses: number;
    draws: number;
}

export const useGameLogic = () => {
    const [playerChoice, setPlayerChoice] = useState<Choice | undefined>();
    const [machineChoice, setMachineChoice] = useState<Choice | undefined>();
    const [statistics, setStatistics] = useState<Statistics>({ wins: 0, losses: 0, draws: 0 });
    const [message, setMessage] = useState<string | undefined>();


    const handlePlayerChoice = (choice: Choice) => {
        setPlayerChoice(choice);
    }
    
    const handleMachineChoice = useCallback(() => {
        const randomChoice = Math.floor(Math.random() * 3);
        const choices = Object.values(Choice);
        const machineChoice = choices[randomChoice] as Choice;
        setMachineChoice(machineChoice);
        determineWinner(playerChoice, machineChoice);
    }, [playerChoice]);

    useEffect(() => {
        if (playerChoice !== undefined) {
            handleMachineChoice();
        }
    }, [playerChoice, handleMachineChoice]);


    const determineWinner = (player: Choice | undefined, machine: Choice | undefined) => {
        if (!player || !machine) return;
    
        if (player === machine) {
            setMessage("Partida empatada");
            setStatistics(prevStats => ({ ...prevStats, draws: prevStats.draws + 1 }));
        } else if (
            (player === Choice.Rock && machine === Choice.Scissors) ||
            (player === Choice.Paper && machine === Choice.Rock) ||
            (player === Choice.Scissors && machine === Choice.Paper)
        ) {
            setMessage("Você venceu!");
            setStatistics(prevStats => ({ ...prevStats, wins: prevStats.wins + 1 }));
        } else {
            setMessage("Você perdeu!");
            setStatistics(prevStats => ({ ...prevStats, losses: prevStats.losses + 1 }));
        }
    }

    const handleResetScore = () => {
        setMessage(undefined);
        setPlayerChoice(undefined)
        setMachineChoice(undefined)
        setStatistics({ wins: 0, losses: 0, draws: 0 });
    }

    return {
        playerChoice,
        machineChoice,
        statistics,
        message,
        handlePlayerChoice,
        handleResetScore
    };
};