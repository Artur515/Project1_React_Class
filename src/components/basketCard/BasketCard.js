import style from './style.module.css'
import {subTotal} from "../../helper";


const BasketCard = (props) => {
    return (
        <div className={style.basket_item}>
            <div>
                <h3>Title: {props.product?.title}</h3>
                <h4>Quantity: {props.product?.quantity} * {props.product?.price}$=
                    {subTotal(props.product?.quantity, props.product?.price)} $</h4>
            </div>
            <div className='cursor' onClick={() => props.handleDelete(props.id)}>
                <img
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/000000/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png"
                    alt='delete'/>
            </div>
        </div>
    )
}

export default BasketCard