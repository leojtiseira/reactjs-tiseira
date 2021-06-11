import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

function ItemListContainer() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <ItemCount />
                    <Card.Title>Producto</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer;

