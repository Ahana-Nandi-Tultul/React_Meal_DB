import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Meal.css';


const Meal = (props) => {
    const {meal} = props
    const {strMealThumb, strMeal, strCategory, strArea} = meal;
    const handleAddToCart = props.handleAddToCart;
   
    return (
        <div className='meal'>
            <div className='meal-info'>
                <img src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                <button className='btn-cart' onClick={() => handleAddToCart(meal)}>
                Add To Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Meal;