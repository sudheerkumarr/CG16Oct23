import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi-browser';


export const Register = () => {
    // Step 3: Define schema
    //const schema = Joi.object({});


    const navigate = useNavigate();


    // define state
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        contactNo: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    // Step 3: Define schema to validate user data(form data)
    const schema = Joi.object({
        firstName: Joi.string().alphanum().min(3).max(30).required(),
        lastName: Joi.string().alphanum().min(1).max(30).required(),
        contactNo: Joi.string().regex(new RegExp('^[0-9]{10}$')).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
        password: Joi.string().regex(new RegExp('^[a-zA-Z0-9#!&.^]{3,30}$')).required()
    });

    // Step 4: method to validate user input againest schema
    const validate = () => {
        const errors = {}; //object type local variable

        // validate form data with schema using Joi validate() function
        const result = Joi.validate(user, schema, {
            abortEarly: false,
        });
        console.log(result);
        // setting error messages to error properties
        // ex: errors[username] = "username is required";
        // ex: errors[password] = "password is required";
        if (result.error != null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        return Object.keys(errors).length === 0 ? null : errors;
    };
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
        // validate
        setErrors(validate());
        if (errors) return;
        axios
            .post("http://localhost:8082/employee/add/dto", user)
            .then((response) => {
                console.log(response);
                alert("User registered successfully!")
                // redirect user to login page
                navigate("/login")
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <p style={{ color: "red", textTransform: "capitalize" }} className="mt-3 h3 bg-secondary w-50 mx-auto text-center text-white p-2 ">Register</p>
            <form onSubmit={handleSubmit} className="w-50 mx-auto border p-3  rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div>
                    <label className="form-label">FirstName</label>
                    <input onChange={handleChange} name="firstName" value={user.firstName} className="form-control mb-3" type="text" placeholder="Enter first name" />
                    {errors && <small className='text-danger'>{errors.firstName}</small>}
                </div>
                <div>
                    <label className="form-label">LastName</label>
                    <input onChange={handleChange} name="lastName" value={user.lastName} className="form-control mb-3" type="text" placeholder="Enter last name" />
                    {errors && <small className='text-danger'>{errors.lastName}</small>}
                </div>
                <div>
                    <label className="form-label">ContactNo</label>
                    <input onChange={handleChange} name="contactNo" value={user.contactNo} className="form-control mb-3" type="text" placeholder="Enter contact number" />
                    {errors && <small className='text-danger'>{errors.contactNo}</small>}
                </div>
                <div>
                    <label className="form-label">Email</label>
                    <input onChange={handleChange} name="email" value={user.email} className="form-control mb-3" type="text" placeholder="Enter email address" />
                    {errors && <small className='text-danger'>{errors.email}</small>}
                </div>
                <div>
                    <label className="form-label">Password</label>
                    <input onChange={handleChange} name="password" value={user.password} className="form-control mb-3" type="password" placeholder="Enter password" />
                    {errors && <small className='text-danger'>{errors.password}</small>}
                </div>
                <div className="d-grid gap-2">
                    <input className="btn btn-secondary" type="submit" value="Register" />
                </div>

            </form>
        </div >
    )
};

