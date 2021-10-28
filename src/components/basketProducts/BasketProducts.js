import React, {Component} from 'react';
import style from './style.module.css'
import Close from "../../ui/close/Close";
import BasketCard from "../basketCard/BasketCard";


class BasketProducts extends Component {
    render() {
        return (
            <nav role='navigation'>
                <div className={style.basket_menu}>
                    <input type="checkbox"
                           checked={this.props.basketOpenList}
                           onChange={this.props.handleOpenCloseBasket}/>
                    <div className={style.basket_list}>
                        <div onClick={this.props.handleOpenCloseBasket} className='cursor'><Close/></div>
                        {this.props.basketList.length ? this.props.basketList.map((product) => {
                            return <BasketCard handleDelete={this.props.handleDelete} key={product.id}
                                               product={product.product} id={product.id}/>
                        }) : <div>Basket is empty</div>}
                    </div>
                </div>
            </nav>
        );
    }
}

export default BasketProducts;