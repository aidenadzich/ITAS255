import { useLocation } from "react-router-dom";


export default function Confirmation() {
    const { state } = useLocation();


    return (
        <div className="container">
            <h1>Thank You!</h1>

            {state && (
                <>
                    <p>{state.name}, you are now register for a campus tour!</p>
                    <p>Details have been sent to {state.email}</p>
                </>
            )}
        </div>
    );
}