const addToCart = (id) => {
    let orderCart = {};

    const storedCart = localStorage.getItem('order-cart');
    if(storedCart){
        orderCart = JSON.parse(storedCart);
    }

    const quantity = orderCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        orderCart[id] = newQuantity;
    }
    else{
        orderCart[id] = 1;
    }

    localStorage.setItem('order-cart', JSON.stringify(orderCart));
}

const getItemFromLocalStorage = () => {
    const storedCart = localStorage.getItem('order-cart');
    if(storedCart){
        const orderCart = JSON.parse(storedCart);
        return orderCart;
    }
}

export {
    addToCart,
    getItemFromLocalStorage
}