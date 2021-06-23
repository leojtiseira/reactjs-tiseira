import React, { useState, useEffect } from 'react'
import Item from './Item'

export const ItemList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1403")
      .then(res => res.json())
      .then(res => {
        setProducts(res.results)
        console.log(res)
      })
  }, 
  [])

  return (
    <>
      {
        products.map((element, index) => {
          return (
            <Item key={index} 
            id={element.id} 
            image={element.thumbnail}
             name={element.title} 
             precio={element.price} 
             stock={element.available_quantity} />
          )
        })
      }
    </>
  )
}
export default ItemList