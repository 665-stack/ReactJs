import React from 'react';
import { add, multiply, subtract } from '../../Utilities/calculate';

const Shoes = () => {
    const first = 12;
    const second = 6;
    const result = multiply(first, second);
    const sum = add(first, second);
    const difference = subtract(result, sum)
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result: {result} </p>
            <p>Sum : {sum}</p>
            <p>Difference : {difference}</p>
        </div>
    );
};

export default Shoes;