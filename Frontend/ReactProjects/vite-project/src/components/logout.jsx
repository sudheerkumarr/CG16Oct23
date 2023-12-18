import { useContext, useEffect } from "react";
import { LoginContext } from "../App";

const Logout = () => {
    const value = useContext(LoginContext);
    const handleLogout = () => {
        const lgn = { ...value.login };
        lgn.isLogin = !lgn.isLogin;
        value.setLogin(lgn);
    }
    useEffect(() => {
        handleLogout();
    }, [])
    return (
        <div>
            <h1>Logout Page</h1>
        </div>
    );
}

export default Logout;