import React, { useState, useEffect, useContext } from 'react'
import Item from './Item'
import AppContext from '../context/AppContext'

export const ItemList = () => {
  const [product, setProducts] = useState([])
  const [cart,setCart] = useState ([])
  
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1403")
      .then(response => response.json())
      .then(data => setProducts(data.results))
  }, [])

  const {addToCart } = useContext(AppContext);
  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <>  
      {
        product.map((element, id) => {
          return (
            <Item
              key={id}
              id={element.id}
              image={element.thumbnail}
              name={element.title}
              precio={element.price}
              stock={element.available_quantity}
              handleAddToCart={handleAddToCart}
            />
          )
        })
      }
    </>
  )
}
export default ItemList