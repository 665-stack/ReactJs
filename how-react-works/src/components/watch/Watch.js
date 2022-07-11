import React, { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../tablet/Tablet';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);

    }
    useEffect(() => {
        console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '2px solid black', margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Steps</button>
            <Display name={'garmin'} steps={steps}></Display>
            <Tablet></Tablet>

        </div>
    );
};

export default Watch;