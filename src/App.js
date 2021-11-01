import React, {Component} from 'react';
import Wrapper from "./container/wrapper/Wrapper";
import Header from "./components/header/Header";
import CardList from "./components/cardList/CardList";
import {
    deleteBasketProduct,
    getAllProducts,
    getBasketProducts,
    postProductToBasket,
    updateBasketProductWithId
} from "./api";
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
        const newObj = {...obj, quantity: 1}
        const basketProduct = this.state.basketItems.find((product) => product.product.id === obj.id)
        if (!basketProduct) {
            try {
                await postProductToBasket(newObj)
                const {data} = await getBasketProducts()
                this.setState({basketItems: data})
            } catch (error) {
                this.setState({error: error})
            }
        } else {
            const updatedBasketProduct = this.state.basketItems.find(product => product.product.id === obj.id);
            await updateBasketProductWithId({
                ...updatedBasketProduct,
                product: {...updatedBasketProduct.product, quantity: updatedBasketProduct.product.quantity + 1}
            })
            const {data} = await getBasketProducts()
            this.setState({basketItems: data})
        }
    }


    handleSearch = (string) => {

        const searchResult = this.state.productList.filter((product) => {
            return product.title.toLowerCase().substring(0, 4).includes(string)
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