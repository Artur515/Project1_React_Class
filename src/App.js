import React, {Component} from 'react';
import Wrapper from "./container/wrapper/Wrapper";
import './App.css'
import Header from "./components/header/Header";
import CardList from "./components/cardList/CardList";
import fakeImageToCard from './images/multfilm_lyagushka_32117.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [{
                id: 1,
                image: fakeImageToCard,
                title: "AAAAA",
                price: 12,
                ingredients: "aaaaaaaaaaaaaaaaaaaaaa"
            }, {
                id: 2,
                image: fakeImageToCard,
                title: "BBBBB",
                price: 12,
                ingredients: "bbbbbbbbbbbbbbbbbbbbbb"
            }, {
                id: 3,
                image: fakeImageToCard,
                title: "CCCCC",
                price: 12,
                ingredients: "sdcasldvksdlkvlks dvlkdfvldf svlsdflvjsdlkfdv ssssssssssssssss sssssssssssssssssss"
            }],
            basketItems: [],
            filteredProductList: []
        };
    }


    componentDidMount() {
        this.setState({filteredProductList: this.state.productList})
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
                    <CardList list={this.state.filteredProductList} handleAddToBasket={this.handleAddToBasket}/>
                </Wrapper>
            </>
        )
    }
}

export default App