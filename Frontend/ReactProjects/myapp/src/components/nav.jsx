// imr
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// sfc - stateless functional component
// const Nav = () => {
//     return (
//         <div></div>
//     );
// }



function Nav() {
    localStorage.setItem("isLogin", true);
    // // Get data from local storage
    // const [login, setLogin] = useState({
    //     isLogin: localStorage.getItem("isLogin"),
    //     role: localStorage.getItem("role"),
    //     email: localStorage.getItem("email")
    // });

    return (
        <div>
            <nav className="navbar bg-secondary navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="">MyApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/customers">Customers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/employees">Employees</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">

                            < li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>

                            < li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default Nav;