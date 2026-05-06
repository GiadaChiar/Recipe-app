//create buttons for homepage and 2 for serch (send)

//props to pass to Button

type ButtonProps = {
    label: string;
    onClick: () => void;
    variant : string;
};

export default function Button({label, onClick, variant}: ButtonProps
) {
    return (
    <button
        className = {variant}
            type="button"
        onClick = {onClick}
        >
        {label}
        </button>
    );
}