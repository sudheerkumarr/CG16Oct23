import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Logout = () => {
    useEffect(() => {
        axios.get(`http://localhost:8082/logout/${localStorage.getItem('email')}`)
            .then((res) => {
                console.log(res);
                localStorage.setItem("isLogin", false);
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