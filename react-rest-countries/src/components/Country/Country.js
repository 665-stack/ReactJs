import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    const { name, population, area, region } = props.country
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <p> Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;