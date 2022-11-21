import { Link } from "react-router-dom";
import CreateForm from "../components/LoginCreateAccountForm.js"

function Login(props){
    return(
        <CreateForm 
            header="Login"
            button="Login"
        />
    )
}

export default Login