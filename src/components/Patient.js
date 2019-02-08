import React from 'react'

const Pacient = (props) => (
    <div>
        <h1>{props.paciente.nombre}</h1>
        <p>Tiene: {props.paciente.edad} años</p>
        <p>Vive en: {props.paciente.direccion}</p>
        <p>Correo electrónico: {props.paciente.correo}</p>
        <p>Sintomas {props.paciente.sintomas}</p>
    </div>
)

export default Pacient