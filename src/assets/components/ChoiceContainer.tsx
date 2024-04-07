
interface Props {
    typeOfPlayer: string,
    choice: string | undefined;
}

export const ChoiceContainer = ( { typeOfPlayer, choice }:Props ) => {
    return(
        <div className="player_container">
            <span>{typeOfPlayer}</span>
            <div className='player_choice'>
                {choice}
            </div>
        </div>
    );
}