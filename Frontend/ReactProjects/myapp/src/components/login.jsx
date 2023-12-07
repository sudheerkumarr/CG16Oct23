// imrc
import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        login: {
            email: "",
            password: "",
            role: ""
        },
        errRes: ""
    }

    handleChange = (event) => {
        // copy state.login details to lgn
        const lgn = { ...this.state.login }

        // update lgn details
        lgn[event.target.name] = event.target.value;

        // copy lgn detail to state.login
        this.setState({ login: lgn });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8082/login", this.state.login)
            .then((res) => {
                this.setState({ errMsg: "" })
                console.log(res);
                alert("User logged in successfully!");
                this.props.navigation.navigate('/home');
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.message);
                this.setState({ errMsg: err.response.data.message });
            });
    }
    render() {
        return (
            <div>
                {this.state.errMsg &&
                    <div className="alert alert-danger w-50 mx-auto" role="alert">
                        {this.state.errMsg}
                    </div>
                }
                <p style={{ color: "red", textTransform: "capitalize" }} className="mt-3 h3 bg-secondary w-50 mx-auto text-center text-white p-2 ">Login</p>
                <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3  rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <label className="form-label">Email</label>
                    <input name="email" onChange={this.handleChange} value={this.state.login.email} className="form-control mb-3" type="text" placeholder="Enter email address" />
                    <label className="form-label">Password</label>
                    <input name="password" onChange={this.handleChange} value={this.state.login.password} className="form-control mb-3" type="password" placeholder="Enter password" />
                    <label className="form-label">Role</label>
                    <select name="role" onChange={this.handleChange} value={this.state.login.role} className="form-select mb-3">
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