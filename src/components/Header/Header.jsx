import { Link, NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import "./Header.css"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);


  const reset = ()=>{
    let pregunta = prompt("Se reiniciara todo el stock, esta seguro?")
    
    if(pregunta === "si"){
      localStorage.clear()
      alert("Reinicio exitoso")
    }else{
      alert("No se borraron los datos")
    }
  }
  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <header>
      <Link to={'/'} className="logo">
        <h1>Stock</h1>
      </Link>
      <nav className="menu" ref={menuRef}>
        <div className={`icon nav-icon-5 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`ulNav ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to={`/Chiquitas`} className="link" onClick={handleLinkClick}>Botellas Chicas</NavLink>
          </li>
          <li>
            <NavLink to={`/Coca-cola`} className="link" onClick={handleLinkClick}> Coca-Cola </NavLink>
          </li>
          <li>
            <NavLink to={`/Pepsi`} className="link" onClick={handleLinkClick}>Pepsi</NavLink>
          </li>
          <li>
            <NavLink to={`/Pritty`} className="link" onClick={handleLinkClick}>Pritty</NavLink>
          </li>
          <li>
            <NavLink to={`/Secco`} className="link" onClick={handleLinkClick}>Secco</NavLink>
          </li>
          <li>
            <NavLink to={`/Doble-Cola`} className="link" onClick={handleLinkClick}>Doble Cola</NavLink>
          </li>
          <li>
            <NavLink to={`/Torasso`} className="link" onClick={handleLinkClick}>Torasso</NavLink>
          </li>
          <li>
            <NavLink to={`/Aguas-Sodas`} className="link" onClick={handleLinkClick}>Aguas/Sodas</NavLink>
          </li>
          <li>
            <NavLink to={`/Fresh`} className="link" onClick={handleLinkClick}>Fresh</NavLink>
          </li>
          <li>
            <NavLink to={`/Saborizadas`} className="link" onClick={handleLinkClick}>Aguas Saborizadas</NavLink>
          </li>
          <li>
            <NavLink to={`/Jugos-Chocolatadas`} className="link" onClick={handleLinkClick}>Chocolatas/Jugos</NavLink>
          </li>
          <li>
            <NavLink to={`/Gatorade-Power`} className="link" onClick={handleLinkClick}>Gatorare/Powerade</NavLink>
          </li>
          <li>
            <NavLink to={`/Energizantes`} className="link" onClick={handleLinkClick}>Energizantes</NavLink>
          </li>
          <li>
            <NavLink to={`/Latas`} className="link" onClick={handleLinkClick}>Latas</NavLink>
          </li>
          <li>
            <NavLink to={`/Vino`} className="link" onClick={handleLinkClick}>Vinos</NavLink>
          </li>
          <li>
            <NavLink to={`/Bebidasconalcohol`} className="link" onClick={handleLinkClick}>Bebidas con Alcohol</NavLink>
          </li>
          <li>
            <NavLink to={`/Botellas-cerveza`} className="link" onClick={handleLinkClick}>Botellas Cerveza</NavLink>
          </li>
        </ul>
      <button className="reset" onClick={reset}>Reset</button>
      </nav>
    </header>
  )
}

export default Header