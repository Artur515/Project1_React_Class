import React, {Component} from 'react';
import Card from "../card/Card";

class CardList extends Component {


    render() {
        return (
            <>
                {this.props.list.length === 0 ?
                    <div>No results found. Try another request </div> : this.props.list.map((product) => {
                        return <Card product={product}
                                     key={product.id}
                                     handleAddToBasket={this.props.handleAddToBasket}/>
                    })}
            </>
        );
    }
}

export default CardList;