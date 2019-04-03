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
            {cntrls.map(ctrl => {
                return <Control
                    key={ctrl.label}
                    ingridient={ctrl.label}
                />
            })}
        </div>
    );
};

export default controls;
