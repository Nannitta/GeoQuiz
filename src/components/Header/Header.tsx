import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo-peq.webp';
import menu from '../../assets/images/menu.svg';

const Header = () => {
  return (
    <header className='text-primary-dark-color'>
      <NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
      <div>
        <div>
          <img src={menu} alt="Menu" />
        </div>
        <ul>
          <li>
            <Link to={'/adivina-la-capital'}>Capitales</Link>
          </li>
          <li>
            <Link to={'/adivina-la-bandera'}>Banderas</Link>
          </li>
          <li>
            <Link to={'/adivina-el-continente'}>Continentes</Link>
          </li>
          <li>
            <Link to={'/lista-paises'}>GeoWiki</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;