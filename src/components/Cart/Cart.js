import React from 'react';

const Cart = ({cart}) => {
    let quantity = 0; 
    for(const meal in cart){
        quantity = quantity + cart[meal].quantity;
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Selected items: {quantity}</p>
            <h3>All the Items:</h3>
            {
                cart.map(meal => <p>{meal.strMeal} <span> {meal.quantity}</span></p>)
            }

        </div>
    );
};

export default Cart;