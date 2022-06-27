import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props);
    const { flags, name, region, capital, population } = props.country;
    return (

        <div className='country col-sm-12 col-md-6 col-lg-3 text-center rounded'>
            <img src={flags.png} alt="" />
            <h4 className='fs-5 text pt-3'>{name.common}</h4>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>


    );
};

export default Country;