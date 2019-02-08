import React from 'react'

const Product = (props) => (
    <div>
        <h2>{props.p.nombre}</h2>
        <p>Tipo : {props.p.tipo}</p>
        <p>Contenido: {props.p.contenido}</p>
        <p>Caducidad: {props.p.caducidad}</p>
        <p>Cuanto le vale: {props.p.precio}</p>
        <img src={props.p.imagen} alt={props.p.nombre} />
    </div>
)

export default Product