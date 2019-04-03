import React from 'react';
import classes from './Control.css';

const control = (props) => {
    return (
        <div className={classes.BuildControl}>
            <button className={classes.Less}>Less</button>
            <div className={classes.Label}>{props.ingridient}</div>
            <button className={classes.More}>More</button>
        </div>
    )
}

export default control;