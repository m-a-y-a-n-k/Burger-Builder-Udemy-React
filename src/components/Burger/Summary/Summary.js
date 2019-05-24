import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {

    render() {

        const Summary = Object.keys(this.props.ingridients)
            .map((ingKey) => {
                return <li key={ingKey}>
                    <span
                        style={{ textTransform: 'capitalize' }}
                    >
                        {ingKey}
                    </span>  :  {this.props.ingridients[ingKey]}
                </li>
            });

        return (
            <Aux>
                <h3>Your Order :-</h3>
                <p> A delicious burger with the following ingridients</p>
                <ul>
                    {Summary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.canceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continued}>CONTINUE</Button>
            </Aux>
        );
    }
}