import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEmployee = () => {

    const navigate = useNavigate();

    // define state
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        contactNo: "",
        email: "",
        password: ""
    });
    const handleChange = (event) => {
        console.log("Handle change");
        console.log(event);
        console.log(event.target.name);// returns name of the field on which user is entered text
        console.log(event.target.value);// return value entered by user
        const newUser = { ...user };
        newUser[event.target.name] = event.target.value;
        // update user object with details entered by user
        setUser(newUser);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit")
        //axios.post('url', formdata)
        axios
            .post("http://localhost:8082/employee/add/dto", user)
            .then((response) => {
                console.log(response);
                alert("User added successfully!")
                // redirect user to login page
                navigate("/employees")
            })
            .catch((err) => { console.log(err) })
    }


    return (
        <div>
            <p style={{ color: "red", textTransform: "capitalize" }} className="mt-3 h3 bg-secondary w-50 mx-auto text-center text-white p-2 ">Add Employee</p>
            <form onSubmit={handleSubmit} className="w-50 mx-auto border p-3  rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <label className="form-label">FirstName</label>
                <input onChange={handleChange} name="firstName" value={user.firstName} className="form-control mb-3" type="text" placeholder="Enter first name" />
                <label className="form-label">LastName</label>
                <input onChange={handleChange} name="lastName" value={user.lastName} className="form-control mb-3" type="text" placeholder="Enter last name" />
                <label className="form-label">ContactNo</label>
                <input onChange={handleChange} name="contactNo" value={user.contactNo} className="form-control mb-3" type="text" placeholder="Enter contact number" />
                <label className="form-label">Email</label>
                <input onChange={handleChange} name="email" value={user.email} className="form-control mb-3" type="text" placeholder="Enter email address" />
                <label className="form-label">Password</label>
                <input onChange={handleChange} name="password" value={user.password} className="form-control mb-3" type="password" placeholder="Enter password" />

                <div className="d-grid gap-2">
                    <input className="btn btn-secondary" type="submit" value="Add" />
                </div>

            </form>
        </div >

    );
}

export default AddEmployee;