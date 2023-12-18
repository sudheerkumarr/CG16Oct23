import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../App";

const Logout = () => {
    const value = useContext(LoginContext);

    useEffect(() => {
        axios.get(`http://localhost:8082/logout/${value.login.email}`)
            .then((res) => {
                console.log(res);
                value.setLogin(res.data);
            })
            .catch((err) => { console.log(err) })

    }, [])
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
                < h1 > Logged out successfully!!!</h1 >
                <small className="text-center">Click <Link to="/login">here</Link> to login once again.</small>
            </div >
        </div>
    );
}

export default Logout;