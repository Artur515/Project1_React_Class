import React, {Component} from 'react';
import basket from '../../images/basket.png'
import style from './style.module.css'
import Tooltip from "../../ui/tooltip/Tooltip";
import BasketProducts from "../basketProducts/BasketProducts";
import {customCountLength} from "../../helper";


class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {basketOpenList: false}
    }


    handleOpenCloseBasket = () => {
        this.setState({basketOpenList: !this.state.basketOpenList})
    }


    render() {

        return (
            <div className={style.basket}>
                <img onClick={this.handleOpenCloseBasket}
                     src={basket} alt="basket"
                     className={style.basket_image}/>
                {this.props.basketItems.length > 0 && <Tooltip items={customCountLength(this.props.basketItems)}/>}
                <BasketProducts
                    handleDelete={this.props.handleDelete}
                    basketList={this.props.basketItems}
                    handleOpenCloseBasket={this.handleOpenCloseBasket}
                    basketOpenList={this.state.basketOpenList}/>
            </div>
        );
    }
}

export default Basket;

