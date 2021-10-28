import style from './style.module.css'
import Basket from "../basket/Basket";
import Input from "../input/Input";

function Header(props) {

    return (
        <div className={style.header}>
            <h1>{props.title}</h1>
            <Input handleSearch={props.handleSearch}/>
            <Basket handleDelete={props.handleDelete} basketItems={props.basketItems}/>
        </div>
    )
}

export default Header