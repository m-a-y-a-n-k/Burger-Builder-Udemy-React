import React from 'react';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import classes from './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const drawer = (props) => {

    let attach = [classes.Drawer, classes.Close];

    if (props.open) {
        attach = [classes.Drawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attach.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Items />
                </nav>
            </div>
        </Aux>
    );
}

export default drawer;