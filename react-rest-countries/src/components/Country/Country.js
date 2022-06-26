import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props);
    return (
        <div className='country'>
            <h3>Country Name: {props.name}</h3>
            <p> Population: {props.population}</p>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;