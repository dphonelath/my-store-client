import React, { Component } from "react"
import Card from "../Card"

class ProductDetail extends Component   {
    state ={
      product: {}
    }

    componentDidMount(){
      const id = this.props.match.params.id
      
      fetch(`http://localhost:4000/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            product: data.product
          })
        })
        .catch(error => {
          console.log(error)
        })
    }

    initiateStripeCheckout = async () => {
      const stripe = window.Stripe('pk_test_mAIk8xpH8IrE4TAxatSeOhca00QZmXB7FU')

      try {
        // Initiate checkout session to get session id
        const response = await fetch('http://localhost:4000/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        const data = await response.json()
        const sessionId = data.session.id

    
        // Redirect to checkout
        const result = await stripe.redirectToCheckout({ sessionId })
    
      } catch (error) {
        console.log('STRIPE ERROR', error)
      }
    }

    render() {
      return(
        <div>
          <h1> Welcome to Product Detail</h1>
          <Card>
            <h2>{this.state.product.name}</h2>
            <img src={this.state.product.img_url}  alt= "Product Image" />
            <h3> Price: ${this.state.product.price/100}.00</h3>
            <button onClick={this.initiateStripeCheckout}>Purchase</button>
          </Card>

        </div>
      )
    }
}

export default ProductDetail 