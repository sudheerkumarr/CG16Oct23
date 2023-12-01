// imrc
import React, { Component } from 'react';

class Login extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <p style={{ color: "red", textTransform: "capitalize" }} className="mt-3 h3 bg-secondary w-50 mx-auto text-center text-white p-2 ">Login</p>
                <form className="w-50 mx-auto border p-3  rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <label className="form-label">Email</label>
                    <input className="form-control mb-3" type="text" placeholder="Enter email address" />
                    <label className="form-label">Password</label>
                    <input className="form-control mb-3" type="password" placeholder="Enter password" />
                    <label className="form-label">Role</label>
                    <select className="form-select mb-3">
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
}

export default Login;