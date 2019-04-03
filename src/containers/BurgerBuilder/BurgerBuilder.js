import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import Summary from '../../components/Burger/Summary/Summary';

const ING_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.2
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingridients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            price: 4,
            purchasable: false,
            ordered: false
        }
    }

    updatePurchase(price) {
        this.setState({
            purchasable: price > 4
        });
    }

    addIngridientHandler = (type) => {
        let ingridients = { ...this.state.ingridients };
        let count = ingridients[type];
        ingridients[type] = count + 1;
        let price = this.state.price + ING_PRICES[type];
        this.setState({
            ingridients,
            price
        });
        this.updatePurchase(price);

    }

    orderHandler = () => {
        this.setState({
            ordered: true
        });
    }

    removeIngridientHandler = (type) => {
        let burger = { ...this.state };
        let count = burger.ingridients[type];
        if (count > 0) {
            burger.ingridients[type] = count - 1;
            burger.price -= ING_PRICES[type];
            this.setState({
                ingridients: burger.ingridients,
                price: burger.price
            });
            this.updatePurchase(burger.price);
        }
    }

    cancelHandler = () => {
        this.setState({ ordered: false });
    }

    render() {
        let disabled = { ...this.state.ingridients };
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        return (
            <Aux>
                <Modal
                    show={this.state.ordered}
                    modalClosed={this.cancelHandler}
                >
                    <Summary ingridients={this.state.ingridients} />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <Controls
                    burger={{ ...this.state }}
                    disabled={disabled}
                    removed={this.removeIngridientHandler}
                    ordered={this.orderHandler}
                    added={this.addIngridientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;