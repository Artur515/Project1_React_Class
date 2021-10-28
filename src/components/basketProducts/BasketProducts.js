import React, {Component} from 'react';
import style from './style.module.css'
import Close from "../../ui/close/Close";


class BasketProducts extends Component {
    render() {
        return (
            <nav role='navigation'>
                <div className={style.basket_menu}>
                    <input type="checkbox"
                           checked={this.props.basketOpenList}
                           onChange={this.props.handleOpenCloseBasket}/>
                    <ul className={style.basket_list}>
                        <div onClick={this.props.handleOpenCloseBasket} className='cursor'><Close/></div>
                        {this.props.basketList.map((product) => {
                            return <div>{product.title}</div>
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default BasketProducts;