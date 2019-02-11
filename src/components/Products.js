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
                
            ],
            newProduct: {
                nombre: null,
                precio: null,
                imagen: null
            }
        }
    }

    changeName = (e) => {
        let new_product = this.state.newProduct
        new_product.nombre = e.target.value
        this.setState({newProduct: new_product})
    }

    changePrecio = (e) => {
        let new_product = this.state.newProduct
        new_product.precio = e.target.value
        this.setState({newProduct: new_product})
    }

    changeImage = (e) => {
        let new_product = this.state.newProduct
        new_product.imagen = e.target.value
        this.setState({newProduct: new_product})
    }

    render() {
        return (
            <div>
            <h1>Productos disponibles para consumo ilegal</h1>
            {this.state.products.map((product, index)=>(
                <div>
                    <img src={product.imagen}
                    alt={product.nombre}
                    style={{width:"100px", height:"100px"}}/>
                    <h3>{product.nombre}</h3>
                    <p>{product.precio}</p>
                    <p>------------------------------------</p>
                    {/*<Product p={product} />*/}
                </div>
            ))}
            <div className="form-container">
                <h2>Agrega un nuevo producto</h2>
                <label for="nombre">Nombre: </label>
                <input 
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    onChange={(e)=>this.changeName(e)}
                />

                <label for="precio">Precio: </label>
                <input 
                    type="text"
                    name="precio"
                    id="precio"
                    placeholder="Precio $$$"
                    onChange={(e)=>this.changePrecio(e)}
                />

                <label for="imagen">Imagen: </label>
                <input 
                    type="text"
                    name="imagen"
                    id="imagen"
                    placeholder="imagen"
                    onChange={(e)=>this.changeImage(e)}
                />
                <button>Agregame mijo</button>
            </div>
            </div>

        )
    }
}

export default Products