import React, { Component } from 'react'
import Patient from './Patient'

class Patients extends Component {
    constructor(props){
        super(props)
        this.state = {
            pacientes: [
                {
                    nombre: "Juanito Bananas",
                    edad: 24,
                    correo: "juanito@juanito.com",
                    direccion: "Poquito de la chingada",
                    sintomas: "Llego pedo"
                },
                {
                    nombre: "Enrique Peña Nieto",
                    edad: 50,
                    correo: "epn@gaviota.com.mx",
                    direccion: "Los Pinos de la corrupción",
                    sintomas: "No hay gasolina"
                },
                {
                    nombre: "Gildardo Lugo",
                    edad: 80,
                    correo: "director@cbtis.edu.mx",
                    direccion: "Calle Lic. Verdad esq. con Militar",
                    sintomas: "Se quemó el árbol de navidad"
                }
            ]
        }
    }

    render() {
        return (
            <div>
            <h1>Lista de pacientes Enero 2019</h1>
            {this.state.pacientes.map( (paciente, index)=>(
                <div>
                    <h3>Nombre: {paciente.nombre}</h3>
                    <p>Edad: {paciente.edad}</p>
                    <p>Síntomas: {paciente.sintomas}</p>
                    <Patient paciente={paciente} />
                    <p>------------------------------</p>
                </div>
            ))}
            </div>
        )
    }
}

export default Patients