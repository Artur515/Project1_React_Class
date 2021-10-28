import React, {Component} from 'react';
import Wrapper from "./container/wrapper/Wrapper";
import Header from "./components/header/Header";
import CardList from "./components/cardList/CardList";
import {getAllProducts} from "./api";
import './App.css'
import Loader from "./ui/loader/Loader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
            productList: [],
            basketItems: [],
            filteredProductList: []
        };
    }


    componentDidMount() {
        this.setState({load: true})
        getAllProducts()
            .then(response => this.setState({productList: response.data}))
            .then(() => this.setState({filteredProductList: this.state.productList}))
            .catch(e => console.log(e))
            .finally(() => this.setState({load: false}))
    }


    handleAddToBasket = (obj) => {
        this.setState({basketItems: [...this.state.basketItems, obj]})
    }

    handleSearch = (string) => {
        let searchResult = this.state.productList.filter((product) => {
            return product.ingredients.toLowerCase().includes(string) || product.title.toLowerCase().includes(string)
        })
        this.setState({filteredProductList: searchResult})
    }


    render() {
        return (
            <>
                <Header
                    title={'Cafe Any Name'}
                    handleSearch={this.handleSearch}
                    basketItems={this.state.basketItems}/>
                <Wrapper>
                    {this.state.load ? <Loader/> :
                        <CardList list={this.state.filteredProductList} handleAddToBasket={this.handleAddToBasket}/>
                    }
                </Wrapper>
            </>
        )
    }
}

export default App