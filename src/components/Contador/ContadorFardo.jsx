import { useState } from "react"
import "./Contador.css"
const ContadorFardo = ({ cantidad, cantFardo, onConfirm }) => {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    if (contador < 10) {
      setContador(contador + 1)
    }
  }

  const decrementar = ()=>{
    if ( contador > 0 ){
      setContador (contador - 1)
    }
  }

  const confirmar = () => {
    if (contador >= 1) {
      onConfirm(contador);
      setContador(0);
    }
  };


  return (
    <>
      <p className="p">Fardo</p>
      <div className='contador'>
      <button onClick={decrementar} className="restar">-</button>
      <strong className="numero">{contador}</strong>
      <button onClick={incrementar} className="sumar">+</button>
      <button onClick={confirmar} className="confirmar">✔</button>
    </div>
    </>
)
}

export default ContadorFardo