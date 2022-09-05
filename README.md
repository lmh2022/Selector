# Selector
Component for React to select and filter data from a table


Características
  Filtra los datos por el campo mencionado en 'filtrarPor'.
  Arma las opciones del componente en base a los datos.
  Presenta las opciones ordenadas alfabéticamente
  devuelve los datos filtrados al componente superior.


Modo de uso
  import {Selector} from '../Selector';
  En el return del componente superior pegar el Selector:
  <Selector datos={datos} filtrarDatos={d => setDatos(d)} filtrarPor='nombre_del_atributo'/>
 
  
Features:
  It filters the data by attribute in 'filtrarPor'
  It sets the Selector options based on the data.
  It renders the options in alphabetical order.
  It gives back the filtered data to its parent component.
  
How to use:
  import {Selector} from '../Selector';
  Insert the Selector into its parent component as follows:
  <Selector datos={data} filtrarDatos={d => setData(d)} filtrarPor='data_attribute'/>
  
  
