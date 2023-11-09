import { NavLink } from 'react-router-dom';
import github from '../../assets/images/github.svg';

const Footer = () => {
  return (
    <footer>
      <div 
        className='bg-primary-dark-color fixed bottom-0 right-0 clip footer-img w-[75px] h-[75px]'>
        <NavLink to={'https://github.com/Nannitta'}>
          <img 
            src={github} 
            alt="GitHub" 
            className='absolute right-2 bottom-2 w-6 h-6'/>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;