import style from './style.module.css'


const BasketCard = (props) => {
    console.log(props)
    return (
        <div className={style.basket_item}>
            <div>
                <h4>Title: {props.product?.title}</h4>
                <p>Quantity</p>
                <p>Total: {props.product?.price} $</p>
            </div>
            <div className='cursor' onClick={() => props.handleDelete(props.id)}>Delete</div>
        </div>
    )
}

export default BasketCard