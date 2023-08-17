
import './App.css'
import Header from './components/Header/Header'
import  ProductListConteiner  from './components/ProductListConteiner/ProductListConteiner'
import {BrowserRouter, Route, Routes  } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<ProductListConteiner/>}/>
      <Route path='/:marca' element={<ProductListConteiner/>} />
    </Routes>
    </BrowserRouter>
    {/* <ProductListConteiner/> */}
    </>
  )
}

export default App
