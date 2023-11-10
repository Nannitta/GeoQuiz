import { NavLink } from 'react-router-dom';
import github from '../../assets/images/github.svg';

const Footer = () => {
  return (
    <footer>
      <div 
        className='bg-primary-dark-color fixed bottom-0 right-0 clip footer-img w-[64px] h-[64px] tb:w-[96px] tb:h-[96px]'>
        <NavLink to={'https://github.com/Nannitta'}>
          <img 
            src={github} 
            alt="GitHub" 
            className='absolute right-2 bottom-2 w-6 h-6 tb:w-9 tb:h-9'/>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;