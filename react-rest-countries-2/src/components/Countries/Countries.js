import React from 'react';
import './Countries.css'
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div className='Countries'>
            <h1 className='mt-4'>We are human from {countries.length} Countries.</h1>
            <div className='Countries-container row justify-content-center align-items-center'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;