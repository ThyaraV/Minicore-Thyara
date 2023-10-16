import React, { useState } from 'react';
import axios from 'axios';
import './buscador.css';

const Buscador = () => {
  const [fechaVenta, setFechaVenta] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleFechaVentaChange = (event) => {
    setFechaVenta(event.target.value);
  };

  const handleFechaFinChange = (event) => {
    setFechaFin(event.target.value);
  };

  const handleBuscarClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/buscar', { fechaVenta, fechaFin });
      setResultado(response.data);
    } catch (error) {
      console.error('Error al buscar el producto más vendido:', error);
    }
  };

  return (
    <div>
      <h2 className='titulo'>Producto más Vendido</h2>
      <div className='filtros'>
        <label className="label" htmlFor="fechaVenta">Fecha de Venta:</label>
        <input className="fechas" type="date" id="fechaVenta" value={fechaVenta} onChange={handleFechaVentaChange} />
      
        <label className="label" htmlFor="fechaFin">Fecha Final:</label>
        <input className="fechas" type="date" id="fechaFin" value={fechaFin} onChange={handleFechaFinChange} />
      </div>
      <div className='conbutton'>
      <button className='boton' onClick={handleBuscarClick}>Buscar</button>
      </div>
      {resultado && (
        <div>
          <h3>Resultado:</h3>
          <p>Producto más vendido: {resultado.productoMasVendido}</p>
          <p>Total de ventas: {resultado.totalVentas}</p>
          <p>Vendedor: {resultado.vendedor}</p>
        </div>
      )}
      <div className='linkC'>
      <a className='link' href="https://github.com/ThyaraV/Minicore-Thyara.git">Repositorio Github del Mini-Core</a>
      </div>
    </div>
    
  );
 
};

export default Buscador;