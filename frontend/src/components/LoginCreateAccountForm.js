import classes from './componentsStyles/LoginCreateAccountForm.module.css';
import { useRef } from 'react';

function CreateForm (props) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();

        const enteredUsername = usernameRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userData = {
            username: enteredUsername,
            password: enteredPassword,
        };
        
        console.log(userData);
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        props.sendInputsBack(userData);
    }

    return (
    <div className={classes.centerContainer}>
        <div className={classes.container}>
            <h2 className={classes.header}>{props.header}</h2>
            <form className={classes.form} onSubmit={submitHandler} id="loginRegisterForm">
                <div>
                <input type="text" required id="username" placeholder="Username" ref={usernameRef}/>
                </div>
                <div>
                <input type="password" required id="password" placeholder="Password" ref={passwordRef} />
                </div>
                <button className={classes.button}>{props.button}</button>
            </form>
        </div>
    </div>
    );
}

export default CreateForm