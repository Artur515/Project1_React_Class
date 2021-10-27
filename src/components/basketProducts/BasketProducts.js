import React, {Component} from 'react';
import style from './style.module.css'


class BasketProducts extends Component {
    render() {
        return (
            <nav role='navigation'>
                <div className={style.asekandutdGinevitable}>
                    <input type="checkbox"  checked={this.props.basketOpenList}/>
                    <ul className={style.groupseparate}>
                        <div onClick={this.props.handleOpenCloseBasket}>Close</div>
                        {this.props.basketList.map((product)=>{
                            return <div>{product.title}</div>
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default BasketProducts;