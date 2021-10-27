import React, {Component} from 'react';
import basket from '../../images/basket.png'
import style from './style.module.css'
import Tooltip from "../../ui/tooltip/Tooltip";
import BasketProducts from "../basketProducts/BasketProducts";


class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {basketOpenList: false}
    }


    handleOpenCloseBasket = () => {
        this.setState({basketOpenList: !this.state.basketOpenList})
    }


    render() {
        return (<div className={style.basket}>
                <img
                    onClick={this.handleOpenCloseBasket}
                    src={basket} alt="basket"
                    className={style.basket_image}/>
                {this.props.basketItems.length > 0 && <Tooltip items={this.props.basketItems.length}/>}
                <BasketProducts
                    basketList={this.props.basketItems}
                    handleOpenCloseBasket={this.handleOpenCloseBasket}
                    basketOpenList={this.state.basketOpenList}/>
            </div>
        );
    }
}

export default Basket;

// function Basket(props) {
//     console.log(props)
//     return <div className={style.basket}>
//         <img src={basket} alt="basket" className={style.basket_image}/>
//         {props.basketProducts.length > 0 && <Tooltip items={props.basketProducts.length}/>}
//     </div>
// }
//
// export default Basket;