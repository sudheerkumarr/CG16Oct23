import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h1 className='text-center'>Home Page</h1>
            <h1>Count: {props.count}</h1>
        </div>
    );
}

export default Home;