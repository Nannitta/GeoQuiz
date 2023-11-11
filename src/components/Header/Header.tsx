import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo-peq.webp';
import menu from '../../assets/images/menu.svg';

const Header = () => {
  function handleClick() {
    const dropdownMenu = document.querySelector('ul');
    if (dropdownMenu) {
      dropdownMenu.style.flex = 'flex';
      dropdownMenu.style.flexDirection = 'column';
      dropdownMenu.classList.toggle('hidden');
    }
  }
  return (
    <header className='text-primary-dark-color flex pl-4 pr-4 pt-3 justify-between'>
      <NavLink to='/'><img src={logo} alt="Logo" className='w-36'/></NavLink>
      <div className='relative flex float-left flex-col items-end z-[1]'>
        <button className='bg-secondary-color w-9 h-9 rounded-full flex justify-center items-center cursor-pointer' onClick={handleClick}>
          <img src={menu} alt="Menu" className='w-5 h-5'/>
        </button>
        <ul className='bg-primary-light-color text-center w-36 mt-1 rounded-[0.625rem] shadow-container-sh hidden absolute top-9'>
          <li className='hover:bg-[#D811591A] mt-2'>
            <Link to={'/adivina-la-capital'}>Capitales</Link>
          </li>
          <li className='hover:bg-[#D811591A] mt-2'>
            <Link to={'/adivina-la-bandera'}>Banderas</Link>
          </li>
          <li className='hover:bg-[#D811591A] mt-2'>
            <Link to={'/adivina-el-continente'}>Continentes</Link>
          </li>
          <li className='hover:bg-[#D811591A] mb-2 mt-2'>
            <Link to={'/lista-paises'}>GeoWiki</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;