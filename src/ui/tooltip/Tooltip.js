import style from './style.module.css'

function Tooltip(props) {

    return (
        <div className={style.tooltip}>
            <span className={style.tooltip_text}>{props.items}</span>
        </div>
    )
}

export default Tooltip