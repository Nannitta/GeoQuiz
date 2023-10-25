import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/'><img src="" alt="Logo" /></NavLink>
      <nav>
        <NavLink to="/adivina-la-bandera">Banderas</NavLink>
        <NavLink to='/adivina-la-capital'>Capitales</NavLink>
        <NavLink to="/adivina-el-continente">Continentes</NavLink>
      </nav>
      <button>Más Info</button>
    </header>
  );
};

export default Header;