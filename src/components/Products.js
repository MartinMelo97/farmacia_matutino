import React, { Component } from 'react'
import Product from './Product'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [
                {
                    nombre:"Paracetamol",
                    tipo: "pastillas",
                    contenido: "50 mg",
                    caducidad: "Enero 2019",
                    precio: 100,
                    imagen: "https://es.evexzenet.com/imagen/paracetamol.jpg",
                },
                {
                    nombre:"Agua de calzón",
                    tipo: "aguas locas",
                    contenido: "Lo que la mujer quiera",
                    caducidad: "Nunca",
                    precio: 1000,
                    imagen: "https://media.metrolatam.com/2018/04/11/aguadecalzon-54c81fba37305800dc99e452e5f2392d-1200x800.jpg",
                },
                {
                    nombre:"Aspirina",
                    tipo: "pastillas",
                    contenido: "Cafeina",
                    caducidad: "Diciembre 2021",
                    precio: 34.54,
                    imagen: "https://s1.eestatic.com/2018/06/08/ciencia/salud/Farmacologia-Farmacologia_clinica-Medicamentos-Salud_313481328_81018047_1024x576.jpg",
                },
                
            ]
        }
    }

    render() {
        return (
            <div>
            <h1>Productos disponibles para consumo ilegal</h1>
            {this.state.products.map((product, index)=>(
                <div>
                    <img src={product.imagen}
                    alt={product.nombre} width="100" height="100" />
                    <h3>{product.nombre}</h3>
                    <p>{product.precio}</p>
                    <p>------------------------------------</p>
                    <Product p={product} />
                </div>
            ))}
            </div>
        )
    }
}

export default Products