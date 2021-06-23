import React from "react";
import { Card } from 'react-bootstrap';
import Counter from './Counter';
import { Link } from 'react-router-dom'

const Item = ({ id, image, name, precio, stock }) => {
  const onAdd = () => {
    console.log(`Compraste  de artículos`)
  }

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Link to={`/${id}`}><Card.Title>{name}</Card.Title></Link>
        <Card.Text>
          ${precio} Stock:{stock}
        </Card.Text>
        <div>
        <Counter stock={stock} onAdd={onAdd} />
        </div>      
      </Card.Body>
    </Card>
  );
};

export default Item;

