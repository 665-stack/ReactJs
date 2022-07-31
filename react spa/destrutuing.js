const personObject = {
    firstName: 'Mahmodul',
    lastName: 'Shahin',
    address: { country: 'Bangladesh', capital: 'Dhaka' }
};
const cart = { abc: 1, def: 2, ghi: 3 };
const personArray = ['Mahmodul', 'Shahin'];
// Object dot notation and square bracket notation
// Dot notation
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
giveQuantity('abc')

// Simple Object Destructuing




