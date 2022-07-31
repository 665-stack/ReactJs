const personObject = {
    firstName: 'Mahmodul',
    lastName: 'Shahin',
    age: 18,
    address: { country: 'Bangladesh', capital: 'Dhaka' }
};
const cart = { abc: 1, def: 2, ghi: 3 };
const personArray = ['Mahmodul', 'Shahin'];
// Object dot notation and square bracket notation
/* // ========= Dot notation ========
const firstName = personObject.firstName;
console.log(firstName);


// ======= Square Bracket Notation =========
const lastName = ['lastName']

const name = personObject[lastName];
console.log(name);
// -----
const giveQuantity = (id) => {
    console.log(cart[id]);
}
giveQuantity('abc') */

// ======== Simple Object Destructuing =========
// const { firstName, lastName, address } = personObject;
// console.log(firstName, address);

// ===== Array index ======
// const firstName = personArray[0];

// ===== Array Destruturing ====== 
const [firstName, lastName] = personArray;
// but when I dont need firstName then what should I do. I need use ',' for firstName. Example: --
const personFav = ['Black', 'LofiSongs', 'MidNight', 'Tech'];
// suppose here I need MidNight from personFav array.
const [, , MidNight] = personFav;
console.log(MidNight);

// ======= Object Destruturing Pro tricks ======
// Multi level des.
const company = {
    ceo: 'Irfan Islam',
    section: {
        tech: {
            usesTechnology: ['html', 'css', 'js', 'react'],
            averageSalary: 30000,
            manPower: { frontEnd: 'Shahin', backEnd: 'Nirob' }

        },
        product: {
            averageSalary: 20000,
            manPower: { accounted: 'Shihab', manager: 'Nayeem' }
        }
    },
    CompanyAddress: { country: 'india', city: 'mumbai' }
};
const { frontEnd, backEnd } = company.section.tech.manPower;
console.log(frontEnd, backEnd);
//---
const { CompanyAddress: { country, city } } = company;
console.log(country, city);

//  ====== Set Default Value: jodi object e data na pay taile ei default value ta dekhabe. ar thakle dekhabe na. simple :)
const { age = 'Not Available' } = personObject;
console.log(age);


// ==== re-assigning ==== 
// oporer 'company' namer object eo 'country' namer akte var destructuring kora hoice. abong akaner 'wifi' namer object thekeo 'country' namer var destructuring kora hoice. But akhane akta clash lege jabe. jar fole error asbe. r tai 'wifi' object er 'country' ke re-assign kore 'location' kore deya hoice.
const wife = {
    name: 'name janina',
    age: 18,
    hight: "5 feet 3 inch",
    weight: '48 kg',
    country: 'Bangladesh'
};
const { country: location } = wife;
console.log(location);










