import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {

    const Summary = Object.keys(props.ingridients)
        .map((ingKey) => {
            return <li key={ingKey}>
                <span
                    style={{ textTransform: 'capitalize' }}
                >
                    {ingKey}
                </span>  :  {props.ingridients[ingKey]}
            </li>
        });

    return (
        <Aux>
            <h3>Your Order :-</h3>
            <p> A delicious burger with the following ingridients</p>
            <ul>
                {Summary}
            </ul>
            <p>Continue to Checkout ?</p>
        </Aux>
    );
}

export default orderSummary;