
import PopUp from "./popUp";


//default popUp 
export function StatusPopUp({ loading, error, empty }:
    {
        loading: boolean;
        error: string;
        empty?: boolean;
    }) {
    
    if (loading) {
        return <PopUp alert="Loading..." message="" />;
    }

    if (error) {
        return <PopUp alert="Error" message={error} />;
    }

    if (empty) {
        return <PopUp alert="Attention" message="No results found" />;
    }else {
        return;
    }

}