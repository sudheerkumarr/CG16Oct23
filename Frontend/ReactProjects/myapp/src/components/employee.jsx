import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employees = () => {
    // Step1 : define state to keep employee details
    const [employees, setEmployees] = useState([]);

    // Step2:  fetch emp data from db
    // axios
    //     .get("url")
    //     .then(() => { })
    //     .catch(() => { });
    useEffect(() => {
        axios.get("http://localhost:8082/employee/all")
            .then((response) => {
                console.log(response)
                setEmployees(response.data)
            })
            .catch((err) => { console.log(err) })
    }, []);

    // delete function
    //const handleDelete = ()=>{}
    const handleDelete = (id) => {
        console.log("handleDelete: " + id);
        axios
            .delete(`http://localhost:8082/employee/delete/${id}`)
            .then((res) => {
                console.log(res);
                // logic to update table after delete emp from db
                const emps = employees.filter(emp => emp.empId != id);
                setEmployees(emps);
            })
            .catch((err) => { console.log(err) })

    }
    return (
        <div className='w-75 mx-auto'>
            <Link className="float-end btn btn-warning mt-3 ms-2" to="/employee/search">Search</Link>
            <Link className="float-end btn btn-danger mt-3" to="/employee/add">Add</Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>ContactNo</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* Step 3: display details */}
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.contactNo}</td>
                            <td>{emp.login.email}</td>
                            <td>
                                <i className="bi bi-trash3-fill me-4" type="button" onClick={() => handleDelete(emp.empId)}></i>
                                <Link to={`/employee/update/${emp.empId}`}><i className="bi bi-pencil-fill"></i></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default Employees;