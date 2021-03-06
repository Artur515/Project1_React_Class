import Button from "../../ui/button/Button";
import style from './style.module.css'


function Card(props) {
    return (
        <div className={style.card}>
            <img className={style.card_img} src={props.product.image} alt={props.product.title}/>
            <div className={style.card_content}>
                <div className={style.card_title}><h3>{props.product.title}</h3>{props.product.price} $</div>
                <div className={style.card_description}>
                    {props.product.ingredients.map((el, index) => <li key={index}>{el}</li>)}
                </div>
                <Button onClick={() => props.handleAddToBasket(props.product)}>Add to cart</Button>
            </div>
        </div>
    )
}

export default Card