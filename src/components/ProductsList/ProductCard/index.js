/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import Card from "../../Card"
import styles from "./product-card.module.scss"
import { Link } from "react-router-dom"

const ProductCard = ({ name, img_url, price, description, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <Card>
        <h2>{name}</h2>
        <img src={img_url} className={styles.image} alt= "Product Image" />
        <h3> Price: ${price/100}.00</h3>
        <p>{description}</p>
      </Card>
    </Link>
  )
}

export default ProductCard