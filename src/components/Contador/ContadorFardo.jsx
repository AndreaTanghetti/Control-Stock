import { useState } from "react"
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
      <p>Fardo</p>
        <div>
      <button onClick={decrementar} >-</button>
      <strong>{contador}</strong>
      <button onClick={incrementar}>+</button>
      <button onClick={confirmar}>✔</button>
    </div>
    </>
)
}

export default ContadorFardo