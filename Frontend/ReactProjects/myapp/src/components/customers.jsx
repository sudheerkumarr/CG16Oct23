import React, { useState } from 'react'

// useState() - react hook method - define state in functional component
const Customers = () => {
    const [customers, setCustomers] = useState([
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ])
    return (
        <div>
            {/* {customers.map(c => (
                <div key="{c.id}" className="card" style={{ width: "18rem" }}>
                    <img src={c.avatar} className="card-img-top" alt="{c.first_name}" />
                    <div className="card-body">
                        <h5 className="card-title">{c.first_name}</h5>
                        <p className="card-text">{c.email}</p>

                    </div>
                </div>
            ))} */}

            <div className="row">
                {customers.map(c => (
                    <div key="{c.id}" className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div key="{c.id}" className="card mb-3" style={{ width: "18rem" }}>
                            <img src={c.avatar} className="card-img-top" alt="{c.first_name}" />
                            <div className="card-body">
                                <h5 className="card-title">{c.first_name}</h5>
                                <p className="card-text">{c.email}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Customers;