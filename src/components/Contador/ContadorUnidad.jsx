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
<>
    <p className='p'>Unidad</p>
    <div className='contador'>
      <button onClick={decrementar} className="restar">-</button>
      <strong className="numero">{contador}</strong>
      <button onClick={incrementar} className="sumar">+</button>
      <button onClick={confirmar} className="confirmar">✔</button>
    </div>
</>  )
}

export default ContadorUnidad