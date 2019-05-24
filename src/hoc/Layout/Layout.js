import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {

    state = {
        showDrawer: false
    }

    drawerCloseHandler = () => {
        this.setState({
            showDrawer: false
        });
    }

    toggler = () => {
        this.setState((prevState) => {
            return { showDrawer: !prevState.showDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggler={this.toggler} />
                <Drawer open={this.state.showDrawer} closed={this.drawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        );
    }
};

export default Layout;