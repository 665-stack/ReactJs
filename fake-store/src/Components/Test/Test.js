import React, { useState } from 'react';

const Test = (props) => {
    // const { count } = props;

    const [count, setCount] = useState(0);


    return (
        <div className='bg-dark py-5 text-secondary'>
            <div className="count mt-5">
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)} className='btn bg-secondary text-white m-2 p-3'>+</button>

                <button onClick={() => setCount(count + 1)} className='btn bg-secondary text-white m-2 p-3 '>-</button>

            </div>
        </div>
    );
};

export default Test;