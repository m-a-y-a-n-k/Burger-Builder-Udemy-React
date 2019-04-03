import React from 'react';
import classes from './Burger.css';
import Ingridient from './Ingredients/Ingridients';

const burger = (props) => {

    let ingridients = Object.keys(props.ingridients)
        .map((ingKey) => {
            return [...Array(props.ingridients[ingKey])]
                .map((_, idx) => {
                    return <Ingridient key={ingKey + idx} type={ingKey} />
                });
        })
        .reduce((arr, ele) => {
            return arr.concat(ele);
        }, []);

    if (ingridients.length === 0) {
        ingridients = <p>Please add ingridients</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingridient type="bread-top" />
            {ingridients}
            <Ingridient type="bread-bottom" />
        </div>
    );
}

export default burger;