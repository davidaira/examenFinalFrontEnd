import React from "react";
import { useState } from "react";
import InputComp from "./InputComp";

//etiqueta vacia en linea 8 debajo de return (, significa fragment, una etiqueta de React para evitar el import

const FormSaludo = () => {
  
    let [contSaludos, setContSaludos] = useState(0); //el 0 es el valor inicial del contador
    
    let [nombre, setNombre] = useState("");

    let [apellido, setApellido] = useState("");

    const handleSaludo = (event) => {
        event.preventDefault()

        // contSaludos++; asi no
        // asi si

        setContSaludos(contSaludos + 1);
    }

    const handleNombre = (event) => {
        event.preventDefault()

        setNombre(event.target.value) //devuelve el input como objeto
    }

    const handleApellido = (event) => {
        event.preventDefault()

        setApellido(event.target.value) //devuelve el input como objeto
    }


  return (
    <>
      <h1>Cantidad de saludos: {contSaludos}</h1>
      <h1>Hola {nombre} {apellido}</h1>
      <form>
        <InputComp ph="Juan" lbl="Nombre: " handler={handleNombre}/>
        <InputComp ph="Gomez" lbl="Apellido: " handler={handleApellido}/>
        <button onClick={handleSaludo}>Saludar</button>
      </form>
    </>
  );
};

export default FormSaludo;
