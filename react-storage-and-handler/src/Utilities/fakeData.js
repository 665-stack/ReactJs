// use local storage to manage cart data

// add to cart existing item in local storage
const addToDb = id => {
    let shoppingCart = {};

    // get the shopping cart from shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
//=================================
// remove from cart existing item in local storage
const removeFromDb = id => {

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            console.log('exists in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
//================================
// remove full card that I already added
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { addToDb, removeFromDb, deleteShoppingCart }










