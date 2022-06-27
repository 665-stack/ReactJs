import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const { name, population, area, region, flags } = props.country
    return (
        <div className='country bg-secondary'>
            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p> Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;