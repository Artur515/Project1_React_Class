import style from './style.module.css'

const ErrorPage = (props) => {
    // console.log(props.error)
    return (
        <div className={style.error}>
            <h1 className='error'>{props.error.message}</h1>
            <h4 onClick={props.handleRemoveError} className='cursor'>Go back</h4>
        </div>)
}

export default ErrorPage
