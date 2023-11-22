import { NavLink, Link, useLocation} from 'react-router-dom';
import logo from '../../assets/images/logo-peq.webp';
import menu from '../../assets/images/menu.svg';
import { useEffect } from 'react';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/adivina-la-capital') {
      const title = document.querySelector('a[href*="capital"');   
      title?.classList.add('text-secondary-color');
    } else if (location.pathname === '/adivina-la-bandera') {
      const title = document.querySelector('a[href*="bandera"');   
      title?.classList.add('text-secondary-color');
    } else if (location.pathname === '/adivina-el-continente') {
      const title = document.querySelector('a[href*="continente"');   
      title?.classList.add('text-secondary-color');
    } else if (location.pathname === '/lista-paises' || location.pathname === '/pais/') {
      const title = document.querySelector('a[href*="pais"');   
      title?.classList.add('text-secondary-color');
    }
  }, [location]);

  function handleClickMenuTextColor(e: React.MouseEvent<HTMLLIElement>) {
    const titles = document.querySelectorAll('li > a');
    titles.forEach((title) => title.classList.remove('text-secondary-color'));
    const titleTarget = e.target as HTMLLIElement | HTMLAnchorElement;
    titleTarget?.classList.add('text-secondary-color');
  }
  
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
        <button className='bg-secondary-color w-9 h-9 rounded-full flex justify-center items-center cursor-pointer tb:w-11 tb:h-11 lp:hidden ds:hidden' onClick={handleClick}>
          <img src={menu} alt="Menu" className='buttonDropDown w-5 h-5 tb:w-6 tb:h-6'/>
        </button>
        <ul className='menuList bg-primary-light-color text-center w-36 mt-1 rounded-[0.625rem] shadow-container-sh hidden absolute top-9 tb:top-11 tb:text-lg tb:w-40 lp:flex lp:gap-6 lp:font-lilita lp:top-[-25px] lp:shadow-none lp:text-3xl lp:mt-0 lp:right-[27rem]'>
          <li className='hover:text-secondary-color mt-2' onClick={handleClickMenuTextColor}>
            <Link to={'/adivina-la-bandera'} className='dropdownMenu w-full flex justify-center'>Banderas</Link>
          </li>
          <li className='hover:text-secondary-color mt-2' onClick={handleClickMenuTextColor}>
            <Link to={'/adivina-la-capital'} className='dropdownMenu w-full flex justify-center'>Capitales</Link>
          </li>
          <li className='hover:text-secondary-color mt-2' onClick={handleClickMenuTextColor}>
            <Link to={'/adivina-el-continente'} className='dropdownMenu w-full flex justify-center'>Continentes</Link>
          </li>
          <li className='hover:text-secondary-color mb-2 mt-2' onClick={handleClickMenuTextColor}>
            <Link to={'/lista-paises'} className='dropdownMenu w-full flex justify-center'>GeoWiki</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;