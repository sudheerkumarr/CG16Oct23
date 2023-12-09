import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    // initial state
    const [login, setLogin] = useState({
        email: "",
        password: "",
        role: ""
    });

    const [errMsg, setErrMsg] = useState("");


    // methods
    const handleChange = (event) => {
        // copy state.login details to lgn
        const lgn = { ...login }

        // update lgn details
        lgn[event.target.name] = event.target.value;

        // copy lgn detail to state.login
        setLogin(lgn);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8082/login", login)
            .then((res) => {
                setErrMsg("");
                console.log(res);
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("isLogin", `${res.data.login}`);

                alert("User logged in successfully!");
                navigate('/home');
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.message);
                setErrMsg(err.response.data.message);
            });
    }

    return (
        <div>
            {errMsg &&
                <div className="alert alert-danger w-50 mx-auto" role="alert">
                    {errMsg}
                </div>
            }
            <p style={{ color: "red", textTransform: "capitalize" }} className="mt-3 h3 bg-secondary w-50 mx-auto text-center text-white p-2 ">Login</p>
            <form onSubmit={handleSubmit} className="w-50 mx-auto border p-3  rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <label className="form-label">Email</label>
                <input name="email" onChange={handleChange} value={login.email} className="form-control mb-3" type="text" placeholder="Enter email address" />
                <label className="form-label">Password</label>
                <input name="password" onChange={handleChange} value={login.password} className="form-control mb-3" type="password" placeholder="Enter password" />
                <label className="form-label">Role</label>
                <select name="role" onChange={handleChange} value={login.role} className="form-select mb-3">
                    <option>Admin</option>
                    <option>Customer</option>
                    <option>Employee</option>
                </select>
                <div className="d-grid gap-2">
                    <input className="btn btn-secondary" type="submit" value="Login" />
                </div>

            </form>
        </div >
    );
}


export default Login;