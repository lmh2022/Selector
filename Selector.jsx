//Características
// Filtra los datos por el campo mencionado en 'filtrarPor'
// Arma las opciones del componente en base a los datos.
// Presenta las opciones ordenadas alfabéticamente
// devuelve los datos filtrados al componente superior.


//  Modo de uso
//  import {Selector} from '../Selector';
//  En el return del componente parent pegar el Selector:
//  <Selector datos={datos} filtrarDatos={d => setDatos(d)} filtrarPor='nombre_del_atributo'/>


import {useState, useEffect} from 'react';

export function Selector({datos, filtrarDatos, filtrarPor}) {
     const [opciones, setOpciones] = useState('')
     const [datosOriginales, setDatosOriginales] = useState([])

     useEffect(()=>{
          if(datosOriginales.length==0) {setDatosOriginales(datos)}
          setOpciones("<option value='Todos'>Todos</option>"+[...new Set(datosOriginales.map(f=>f[filtrarPor]))]
         .sort((a,b) => a.localeCompare(b)).map(e=>"<option value='"+e+"'>"+e+"</option>").join(''))
      },[datos])

     

     const handleChange = (event) => {
            if(event.target.value=='Todos') {filtrarDatos(datosOriginales); return}
            filtrarDatos(datosOriginales.filter(e=>e[filtrarPor]==event.target.value))
     }


    return(
         <select onChange={handleChange} dangerouslySetInnerHTML={{__html: opciones}}></select>
    )
}