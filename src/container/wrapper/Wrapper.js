import style from './style.module.css'


function Wrapper(props) {
    return <div className={style.wrapper}>{props.children}</div>
}

export default Wrapper;