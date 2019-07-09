import React, { Component } from "react"

class Products extends Component {
    state ={
        products: []
    }

    componentDidMount() {
        console.log("mounted")
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(products => {
                this.setState({
                    products: products
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Products Page!</h1>
                </header>
            </div>
        )
    }
}

export default Products