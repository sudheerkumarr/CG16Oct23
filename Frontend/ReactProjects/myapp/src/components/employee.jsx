import React, { useState, useEffect } from 'react'
import axios from 'axios';

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
        <div>
            <table className='table table-striped w-75 mx-auto'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>ContactNo</th>
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
                            <td>
                                <i className="bi bi-trash3-fill me-4" type="button" onClick={() => handleDelete(emp.empId)}></i>
                                <i className="bi bi-pencil-fill"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default Employees;