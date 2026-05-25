//create standard input


type InputProps = {
    nameClass?: string;
    id: string;
    placeholder: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}& React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ nameClass, id, placeholder, value, onChange, ...props}: InputProps) {
    return (
        <input
            className={nameClass}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
}