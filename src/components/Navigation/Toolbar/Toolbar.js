import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import Toggler from '../Drawer/Toggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Toggler clicked={props.toggler} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.Desktop}>
                <Items />
            </nav>
        </header>
    );
}

export default toolbar;