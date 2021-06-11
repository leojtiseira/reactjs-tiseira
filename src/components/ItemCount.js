import React from 'react'
import Button from 'react-bootstrap/Button'

const Contador = () => {
    function aumentarContador() {
        setClicks(clicks + 1);
    };
    function restarContador() {
        setClicks(clicks - 1);
    };
    
    const [clicks, setClicks] = React.useState(0);
    return (
        <div>
            <Button onClick={aumentarContador}>Agregar</Button>
            <Button onClick={restarContador}
            variant="danger">X</Button>
            <p>{`Agragaste ${clicks} productos`}</p>
            
        </div>
    )
}
export default Contador