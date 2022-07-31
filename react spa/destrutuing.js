const personObject = {
    firstName: 'Mahmodul',
    lastName: 'Shahin',
    address: { country: 'Bangladesh', capital: 'Dhaka' }
};
const cart = { abc: 1, def: 2, ghi: 3 };
const personArray = ['Mahmodul', 'Shahin'];
// Object dot notation and square bracket notation
/* // Dot notation
const firstName = personObject.firstName;
console.log(firstName);


// Square Bracket Notation
const lastName = ['lastName']

const name = personObject[lastName];
console.log(name);
// -----
const giveQuantity = (id) => {
    console.log(cart[id]);
}
giveQuantity('abc') */

// Simple Object Destructuing
// const { firstName, lastName, address } = personObject;
// console.log(firstName, address);

// Array index
// const firstName = personArray[0];

// Array Destruturing
const [firstName, lastName] = personArray;
// but when I dont need firstName then what should I do. I need use ',' for firstName. Example: --
const personFav = ['Black', 'LofiSongs', 'MidNight', 'Tech'];
// suppose here I need MidNight from personFav array.
const [, , MidNight] = personFav;
console.log(MidNight);

// Object Destruturing Pro tricks








