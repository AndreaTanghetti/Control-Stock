import ProductList from "../ProducList/ProductList"
import { getBebidas, getProductMarca } from "../../asyncmock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductListConteiner = () => {
    const [bebidas, setBebidas] = useState([]);
    const {marca} = useParams();

    useEffect(() => {
const funcionBebidas = marca ? getProductMarca : getBebidas

funcionBebidas(marca)
            .then(respuesta => setBebidas(respuesta))
            .catch(error => console.log(error))
}, [marca])
  return (
    <div className="contenedor">
        <ProductList bebidas={bebidas}/>
    </div>
  )
}

export default ProductListConteiner
