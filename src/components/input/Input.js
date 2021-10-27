import React, {Component} from 'react';
import style from './style.module.css'

class Input extends Component {

    render() {
        return (
            <div className={style.input_wrapper}>
                <input onChange={(event) => this.props.handleSearch(event.target.value.toLowerCase())}
                       className={style.input} type="text" placeholder='Search by name or ingredient...'/>
            </div>
        );
    }
}

export default Input;