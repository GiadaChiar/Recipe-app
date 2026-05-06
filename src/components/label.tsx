//standard label


type LabelProps = {
    label: string;
    htmlfor: string;
    nameClass: string;
        
}

export default function Label({ label, htmlfor, nameClass}: LabelProps ){
    return (
        <label htmlFor={htmlfor} className={nameClass}>
            {label}
        </label>
    );
}