import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';
import Cart from '../Cart/Cart';
import {addToCart, getItemFromLocalStorage} from '../../utilities/db'


const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, []);

    useEffect(() => {
        const storedCart = getItemFromLocalStorage();
        // console.log(storedCart);
        let addedMeal = [];
        for(const meal in storedCart){
            console.log(meal);
            let storedMeal = meals.find(ml => ml.idMeal === meal);
            if(storedMeal){
                storedMeal['quantity'] = storedCart[meal]; 
                addedMeal.push(storedMeal);
            }
        }
        console.log(addedMeal);
        setCart(addedMeal);
    }, [meals])

    const handleAddToCart = (meal) => {
        // const newCart = [...cart, meal];
        console.log(cart, meal);
        let newCart = [];
        const exists = cart.find(ml => ml.idMeal === meal.idMeal)
        if(!exists){
            meal['quantity'] = 1;
            newCart = [...cart, meal];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(ml => ml.idMeal !== meal.idMeal);
            newCart = [...remaining, exists];
        }
        
        
        setCart(newCart);
        addToCart(meal.idMeal);
    } 
    return (
        <div className='shop-container'>
            <div className='meals-container'>
            {
                meals.map(meal => <Meal 
                    meal={meal} 
                    handleAddToCart={handleAddToCart}
                    key={meal.idMeal}
                    ></Meal>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Meals;