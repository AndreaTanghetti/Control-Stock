import React from 'react'
import { useState } from 'react'

const ContadorUnidad = ({cantidad, onConfirm}) => {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    if (contador < 20) {
      setContador(contador + 1)
    }
  }

  const decrementar = ()=>{
    if ( contador <= 0 ){
      setContador (contador - 1)
    }else {
      onConfirm(-1);
    }
  }

  const confirmar = () => {
    if (contador !== 0) {
      onConfirm(contador);
      setContador(0);
    }
  };
  return (
<div>
    <p>Unidad</p>
    <button onClick={decrementar}>-</button>
<strong>{contador}</strong>
    <button onClick={incrementar}>+</button>
    <button onClick={confirmar}> ✔</button>
</div>  )
}

export default ContadorUnidad