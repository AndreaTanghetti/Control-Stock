import Producto from "../Producto/Producto"

const ProductList = ({bebidas}) => {
  return (
    <div className="contBebidas">
        {bebidas.map(bebidas => <Producto key={bebidas.nombre} {...bebidas}/>)}
    </div>
  )
}

export default ProductList