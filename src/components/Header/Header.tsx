import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo-peq.webp';
import menu from '../../assets/images/menu.svg';

const Header = () => {
  function handleClick() {
    const dropdownMenu = document.querySelector('ul');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('hidden');
      dropdownMenu.classList.toggle('flex');
      dropdownMenu.classList.toggle('flex-col');
    }
  }
  
  window.addEventListener('click', checkMenu);

  function checkMenu (e: MouseEvent) {
    const target = e.target as HTMLButtonElement | HTMLAnchorElement;  
    if ((target.className.split(' ')[0] !== 'dropdownMenu' && target.className.split(' ')[0] !== 'buttonDropDown') || (target.className.split(' ')[0] === 'dropdownMenu')) {
      const dropdownMenu = document.querySelector('.menuList');
      if (dropdownMenu) {
        dropdownMenu.classList.add('hidden');
      }
    }   
  }

  return (
    <header className='text-primary-dark-color flex pl-4 pr-4 pt-3 justify-between items-center ds:pl-6 ds:pr-6'>
      <NavLink to='/'><img src={logo} alt="Logo" className='w-36 tb:w-52'/></NavLink>
      <div className='relative flex float-left flex-col items-end z-[1]'>
        <button className='bg-secondary-color w-9 h-9 rounded-full flex justify-center items-center cursor-pointer tb:w-11 tb:h-11' onClick={handleClick}>
          <img src={menu} alt="Menu" className='buttonDropDown w-5 h-5 tb:w-6 tb:h-6'/>
        </button>
        <ul className='menuList bg-primary-light-color text-center w-36 mt-1 rounded-[0.625rem] shadow-container-sh hidden absolute top-9 tb:top-11 tb:text-lg tb:w-40'>
          <li className='hover:bg-[#D811591A] mt-2'>
            <Link to={'/adivina-la-capital'} className='dropdownMenu w-full flex justify-center'>Capitales</Link>
          </li>
          <li className='hover:bg-[#D811591A] mt-2'>
            <Link to={'/adivina-la-bandera'} className='dropdownMenu w-full flex justify-center'>Banderas</Link>
          </li>
          <li className='hover:bg-[#D811591A] mt-2'>
            <Link to={'/adivina-el-continente'} className='dropdownMenu w-full flex justify-center'>Continentes</Link>
          </li>
          <li className='hover:bg-[#D811591A] mb-2 mt-2'>
            <Link to={'/lista-paises'} className='dropdownMenu w-full flex justify-center'>GeoWiki</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;