import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import "./Header.css"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <Link to={'/'}>
        <h1>Stock</h1>
      </Link>
      <nav className="menu">
        <div className={`icon nav-icon-5 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`ulNav ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to={`/Chiquitas`} className="link">Botellas Chicas</NavLink>
          </li>
          <li>
            <NavLink to={`/Coca-cola`} className="link"> Coca-Cola </NavLink>
          </li>
          <li>
            <NavLink to={`/Pepsi`} className="link">Pepsi</NavLink>
          </li>
          <li>
            <NavLink to={`/Pritty`} className="link">Pritty</NavLink>
          </li>
          <li>
            <NavLink to={`/Secco`} className="link">Secco</NavLink>
          </li>
          <li>
            <NavLink to={`/Doble-Cola`} className="link">Doble Cola</NavLink>
          </li>
          <li>
            <NavLink to={`/Torasso`} className="link">Torasso</NavLink>
          </li>
          <li>
            <NavLink to={`/Aguas/Sodas`} className="link">Aguas/Sodas</NavLink>
          </li>
          <li>
            <NavLink to={`/Fresh`} className="link">Fresh</NavLink>
          </li>
          <li>
            <NavLink to={`/Saborizadas`} className="link">Aguas Saborizadas</NavLink>
          </li>
          <li>
            <NavLink to={`/Jugos-Chocolatadas`} className="link">Chocolatas/Jugos</NavLink>
          </li>
          <li>
            <NavLink to={`/Gatorade-Power`} className="link">Gatorare/Powerade</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header