import { useContext, useEffect } from "react";
import { LoginContext } from "../App";

const Login = () => {
    const value = useContext(LoginContext);
    const handleLogin = () => {
        let lgn = { ...value.login };
        lgn.isLogin = !value.login.isLogin;
        value.setLogin(lgn);
    }

    useEffect(() => {
        handleLogin();
    }, [])

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
}

export default Login;