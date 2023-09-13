/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors, totalCost, remaining}) => {
    // console.log(selectedActors, totalCost, remaining);
    return (
        <div>
            <h2>Cart list</h2>
            <h3>Actors : {selectedActors.length}</h3>
            <h3>Cost : {totalCost}</h3>
            <h3>Remaining : {remaining}</h3>
            {
                selectedActors.map(actor => <li key={actor.id}>{actor.name}</li>)
            }
        </div>
    );
};

export default Cart;