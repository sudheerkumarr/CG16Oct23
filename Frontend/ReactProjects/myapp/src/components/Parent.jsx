import Child from './child';
import { useState } from 'react';

const Parent = (props) => {
    // // functional component state
    // const [count, setCount] = useState(0);

    // // increment function
    // const incr = () => {
    //     setCount(count + 1);
    // }

    // const decr = () => {
    //     setCount(count - 1);
    // }

    return (
        <div>
            <h1>Parent component</h1>
            {/* transfer data(count) from parent to child */}
            <Child count={props.count} incr={props.incr} decr={props.decr} />
        </div>
    );
}

export default Parent;