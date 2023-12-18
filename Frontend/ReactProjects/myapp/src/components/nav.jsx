// imr
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../App';

// sfc - stateless functional component
// const Nav = () => {
//     return (
//         <div></div>
//     );
// }



function Nav() {
    const value = useContext(LoginContext);


    return (
        <div>
            {console.log("nav: " + value.login.email)}
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
                            {
                                value.login.login && value.login.role == 'Admin' &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/users">Users</NavLink>
                                </li>
                            }
                            {
                                value.login.login && value.login.role == 'Admin' &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/customers">Customers</NavLink>
                                </li>
                            }
                            {
                                value.login.login &&
                                < li className="nav-item">
                                    <NavLink className="nav-link" to="/employees">Employees</NavLink>
                                </li>
                            }
                        </ul>
                        <ul className="navbar-nav">

                            {!value.login.login &&
                                < li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            }


                            {!value.login.login &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            }

                            {value.login.login &&
                                < li className="nav-item">
                                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    );
}

export default Nav;