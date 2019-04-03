import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingridients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        }
    }


    render() {
        return (
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <Controls />
            </Aux>
        );
    }
}

export default BurgerBuilder;