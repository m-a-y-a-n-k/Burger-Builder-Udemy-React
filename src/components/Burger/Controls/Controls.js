import React from 'react';
import Control from './Control/Control';
import classes from './Controls.css';

const cntrls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const controls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <em><strong>${props.burger.price.toFixed(2)}</strong></em></p>
            {cntrls.map(ctrl => {
                return <Control
                    key={ctrl.label}
                    qty={props.burger.ingridients[ctrl.type]}
                    disabled={props.disabled[ctrl.type]}
                    removed={() => { props.removed(ctrl.type); }}
                    added={() => { props.added(ctrl.type); }}
                    ingridient={ctrl.label}
                />
            })}
            <button
                onClick={props.ordered}
                className={classes.OrderButton}
                disabled={!props.burger.purchasable}
            >ORDER NOW</button>
        </div>
    );
};

export default controls;
