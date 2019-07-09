import React, { Component } from "react"
import styles from "./products-list.module.scss"
import ProductCard from "./ProductCard"

class Products extends Component {
    state ={
      products: []
    }

    componentDidMount() {
      fetch("http://localhost:4000/api/products")
        .then(res => res.json())
        .then(data => {
          this.setState({
            products: data.products
          })
        })
        .catch(error => {
          console.log(error)
        })
    }

    render() {
      return (
        <div className= {styles.container}>
          <header >
            <h1>Welcome to Products Page!</h1>
          </header>

          <div className={styles.productsContainer}>
            {this.state.products.map(product => {
              return (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  img_url={product.img_url}
                  price={product.price}
                />
              ) 
            })}
          </div>
        </div>
      )
    }
}

export default Products