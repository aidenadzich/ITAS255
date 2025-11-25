import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/confirmed', {
            state: { name: nameRef.current.value, email: emailRef.current.value }
        });
    }
 
 
    return (
        <div class="container">
            <h1>Want to arrange a campus tour?</h1>
            <p>Insert paragraph about doing that here</p>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>Name: <input type="text" name="name" ref={nameRef} placeholder="Enter your name"></input></label>
                <label>Email: <input type="text" name="name" ref={emailRef} placeholder="Enter your email"></input></label>
                <input type='submit' value='Book Now!' />
            </form>
        </div>
    );
}