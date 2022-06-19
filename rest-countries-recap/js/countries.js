const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const CountriesHtml = countries.map(country => getCountriesHtml(country));
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHtml;
}
// option 2
const getCountriesHtml = ({ name, flags, area }) => {
    return `
        <div class="country">
           <h2>${name.common}</h2>
           <p>${area}</p>
           <img src="${flags.png}" alt="">
        </div>

    `
}
loadCountries();




// === option 1 ====
// const getCountriesHtml = country => {

//     const { name, flags } = country;
//     return `
//         <div class="country">
//            <h2>${name.common}</h2>
//            <img src="${flags.png}" alt="">
//         </div>

//     `
// }

// === original ====
// const getCountriesHtml = country => {
//     return `
//         <div class="country">
//            <h2>${country.name.common}</h2>
//            <img src="${country.flags.png}" alt="">
//         </div>

//     `
// }



