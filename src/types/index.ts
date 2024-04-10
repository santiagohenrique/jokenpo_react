import { Choice } from "../enums/Choice";

export interface Statistics {
    wins: number;
    losses: number;
    draws: number;
}

export interface PlayerData {
    playerMoves: number;
    playerChoice?: Choice;
}