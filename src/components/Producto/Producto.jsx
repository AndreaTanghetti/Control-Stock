import React, { useState, useEffect } from "react";
import ContadorUnidad from "../Contador/ContadorUnidad";
import ContadorFardo from "../Contador/ContadorFardo";
import "./Producto.css";

const Producto = ({ nombre, cantidad, id, marca, img, cantFardo }) => {
  const [totalCantidad, setTotalCantidad] = useState(cantidad);

  useEffect(() => {
    const storedCantidad = localStorage.getItem(`cantidad_${nombre}`);
    if (storedCantidad !== null) {
      setTotalCantidad(parseInt(storedCantidad));
    }
  }, [nombre]);

  useEffect(() => {
    localStorage.setItem(`cantidad_${nombre}`, totalCantidad);
  }, [totalCantidad, nombre]);

  const handleConfirmFardo = (contador) => {
    const nuevaCantidad = totalCantidad + cantFardo * contador;
    setTotalCantidad(nuevaCantidad);
  };

  const handleConfirmUnidad = (contador) => {
    if (contador === -1) {
      const nuevaCantidad = totalCantidad - 1;
      setTotalCantidad(nuevaCantidad);
    } else {
      const nuevaCantidad = totalCantidad + contador;
      setTotalCantidad(nuevaCantidad);
    }
  };
const actualizar =()=>{
  localStorage.removeItem(`cantidad_${nombre}`)
  setTotalCantidad(0)
}
  return (
    <div className="cardProd">

      <img src={img} alt="logo" />
            <button onClick={actualizar} className="actualizar">🔄</button>
      <p className="nombre">{nombre}</p>
      <p className="stock">stock: {totalCantidad}</p>
      <div className="contadores">
        <ContadorFardo cantidad={totalCantidad} cantFardo={cantFardo} onConfirm={handleConfirmFardo} />
        <ContadorUnidad cantidad={totalCantidad} onConfirm={handleConfirmUnidad} />
      </div>
    </div>
  );
};

export default Producto;
