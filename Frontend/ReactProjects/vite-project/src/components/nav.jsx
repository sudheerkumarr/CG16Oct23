import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../App";


const Nav = () => {
    const value = useContext(LoginContext);
    return (
        <div>
            <Link to="/home">Home</Link><br />
            {!value.login.isLogin &&
                <Link to="/login">Login</Link>
            }
            {value.login.isLogin &&
                <Link to="/logout">Logout</Link>
            }

        </div>
    );
}

export default Nav;