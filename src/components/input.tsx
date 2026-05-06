//create standard input

type InputProps = {
    id : string;
    nameClass: string;
    placeholder: string;
}

export default function Input({ id, nameClass, placeholder }: InputProps) {
    return (
        <input
            id={id}
            className={nameClass}
            placeholder={placeholder}
            type="string"
        />
    )
}
