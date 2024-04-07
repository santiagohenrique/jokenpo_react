interface Props {
    buttonText: string,
    customClassName?: string;
    onClick: () => void;
}

export const Button = ({ buttonText, customClassName, onClick }: Props) => {

    const buttonClass = customClassName ? `btn_option ${customClassName}` : 'btn_option';

    return (
        <button className={buttonClass} onClick={onClick}>{buttonText}</button>
    );
};