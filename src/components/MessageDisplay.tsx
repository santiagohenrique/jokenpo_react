import React from 'react'

interface MessageDisplay{
    message: string
}

export const MessageDisplay = ( {message}: MessageDisplay ) => {
    return(
        <React.Fragment>
            <div className={`message_container ${message === 'Você venceu!' ? 'win' : message === 'Você perdeu!' ? 'lose' : 'draw'}`}>
                <span className="message">{message}</span>
            </div>
        </React.Fragment>
    );
}