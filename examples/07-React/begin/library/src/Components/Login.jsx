import { useRef, useState } from "react";

export default function Login() {

    const [isLoggedIn, toggleLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const usernameRef = useRef(null);

    const handleButtonClick = () => {

        if (isLoggedIn) {
            setUsername('');
        } else {
            setUsername(usernameRef.current.value);
        }
        toggleLoggedIn(!isLoggedIn);

    }

    return (
        <div>
            { !isLoggedIn &&
            
                <input type='text' placeholder='Username' name='username' ref={ usernameRef }/>

            }
            { isLoggedIn && 
            
                <h4>Welcome back { username }</h4>
            
            }
            <br/><br/><button onClick={ handleButtonClick }>{ isLoggedIn ? 'Logout' : 'Login' }</button><br/><br/>
        </div>
    );

}