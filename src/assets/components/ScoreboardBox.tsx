interface Props {
    text: string
}

export const ScoreboardBox = ( { text }: Props ) => {
    return(
        <div>{text}</div>
    );
}