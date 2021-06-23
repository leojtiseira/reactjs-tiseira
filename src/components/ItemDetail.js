import React from 'react'
import Counter from './Counter'

export const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <>  
            {item !== undefined ? 
            <div>
                <h1>{item.title}</h1>
            <img src={item.thumbnail} alt="" />
            <h2>Precio: ${item.price}</h2>
            <h3>Description</h3>
            <Counter stock={item.available_quantity}/>
            </div>
            :
            <p>No hay nada para mostrar</p>
            
        }           
        </>
    )
}
export default ItemDetail