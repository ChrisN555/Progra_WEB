// src/pages/Facturacion.js

import React from "react";
import "./Facturacion.css";

function Facturacion() {
  return (
    <div className="facturacion">
      <h2>Ingrese sus Datos</h2>
      <form className="facturacion-form">
        <div className="form-group">
          <label>Número de Boleto</label>
          <input type="text" placeholder="Ingrese su número de boleto" required />
        </div>

        <div className="form-group">
          <label>Número de Vuelo</label>
          <input type="text" placeholder="Ingrese su número de vuelo" required />
        </div>

        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" placeholder="Ingrese su nombre completo" required />
        </div>

        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Ingrese su correo electrónico" required />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input type="tel" placeholder="Ingrese su número de teléfono" required />
        </div>

        <div className="form-group">
          <label>RFC</label>
          <input type="text" placeholder="Ingrese su RFC" required />
        </div>

        <div className="form-group">
          <label>Dirección Fiscal</label>
          <input type="text" placeholder="Ingrese su dirección fiscal" required />
        </div>

        <div className="form-group">
          <label>Fecha del Vuelo</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Subtotal</label>
          <input type="number" placeholder="Ingrese el subtotal" required />
        </div>

        <div className="form-group">
          <label>IVA</label>
          <input type="number" placeholder="Ingrese el IVA" required />
        </div>

        <div className="form-group">
          <label>Total</label>
          <input type="number" placeholder="Ingrese el total" required />
        </div>

        <button type="submit" className="submit-button">Generar Factura</button>
      </form>
    </div>
  );
}

export default Facturacion;
