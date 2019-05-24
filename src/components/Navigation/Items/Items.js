import React from 'react';
import Item from './Item/Item';
import classes from './Items.css';

const items = (props) => {

    return (
        <ul className={classes.Items}>
            <Item link="/" active>Burger Builder</Item>
            <Item link="/">Checkout</Item>
        </ul>
    );
}

export default items;