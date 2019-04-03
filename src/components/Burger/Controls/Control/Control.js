import React from 'react';
import classes from './Control.css';

const control = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingridient} ({props.qty})</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}

export default control;