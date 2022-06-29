import React, { useState } from "react";

import Button from "../UI/Button";
import './Meal.css'

const Meal = (props) => {

    const [amount, SetAmount] = useState('');

    const AmountInputHandler = (event) => {
        SetAmount(event.target.value);
    }

    const FormSubmitHandler = (event) => {
        event.preventDefault();

        if (amount === '') {return;}

        const orderedItem = {
            meal: props.title,
            amount: amount,
            unitPrice: props.price
        }

        console.log(orderedItem)
        SetAmount('');
        props.onSubmitOrder(orderedItem);
    }

    const price = `$${props.price}`

    return (
        <div className="meal">
            <div className="meal__item">
                <h3 className="meal__title">{props.title}</h3>
                <p className="meal__description">{props.description}</p>
                <p className="meal__price">{price}</p>
            </div>
            <form className="meal__user" onSubmit={FormSubmitHandler}>
                <label htmlFor="meal-amount">Amount</label>
                <input id="meal-amount" type="number" value={amount} min="1" step="1" onChange={AmountInputHandler}></input>
                <Button type="submit">Add</Button>
            </form>
        </div>
    )
}

export default Meal;
