import React, {Component} from 'react';
import Wrapper from "./container/wrapper/Wrapper";
import Header from "./components/header/Header";
import CardList from "./components/cardList/CardList";
import {deleteBasketProduct, getAllProducts, getBasketProducts, postProductToBasket} from "./api";
import './App.css'
import Loader from "./ui/loader/Loader";
import ErrorPage from "./pages/ErrorPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
            productList: [],
            basketItems: [],
            filteredProductList: [],
            error: null
        };
    }


    componentDidMount() {
        this.setState({load: true})
        getAllProducts()
            .then(response => this.setState({productList: response.data}))
            .then(() => this.setState({filteredProductList: this.state.productList}))
            .catch(error => this.setState({error: error}))
            .finally(() => this.setState({load: false}))
        getBasketProducts()
            .then(response => this.setState({basketItems: response.data}))
            .catch(error => this.setState({error: error}))
    }


    handleAddToBasket = async (obj) => {
        const itemIndex = this.state.basketItems.findIndex((item) => console.log(item));

        if (itemIndex < 0) {
            const newItem = {
                ...obj,
                quantity: 1,
            }
            this.setState([...this.state.basketItems, newItem]);
        } else {
            const newOrder = this.state.basketItems.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    };
                } else {
                    return orderItem;
                }
            });
            this.setState(newOrder);
        }
        try {
            await postProductToBasket(obj)
            const {data} = await getBasketProducts()
            this.setState({basketItems: data})
        } catch (e) {
            console.log(e)
        }
    }

    handleSearch = (string) => {
        let searchResult = this.state.productList.filter((product) => {
            return product.ingredients.toLowerCase().includes(string) || product.title.toLowerCase().includes(string)//start with
        })
        this.setState({filteredProductList: searchResult})
    }


    handleDelete = async (id) => {
        try {
            await deleteBasketProduct(id)
            const {data} = await getBasketProducts()
            this.setState({basketItems: data})
        } catch (error) {
            this.setState({error: error})
        }
    }


    handleRemoveError = () => {
        this.setState({error: null})
    }

    render() {
        return (
            <>
                <Header
                    title={'Cafe Any Name'}
                    handleSearch={this.handleSearch}
                    handleDelete={this.handleDelete}
                    basketItems={this.state.basketItems}/>
                {this.state.error !== null ?
                    <ErrorPage error={this.state.error} handleRemoveError={this.handleRemoveError}/> :
                    <Wrapper>
                        {this.state.load ?
                            <Loader/> :
                            <CardList list={this.state.filteredProductList} handleAddToBasket={this.handleAddToBasket}/>
                        }
                    </Wrapper>}
            </>
        )
    }
}

export default App