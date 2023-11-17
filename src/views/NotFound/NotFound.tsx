import notfoundImg from '../../assets/images/notFound.svg';
import { Link } from 'react-router-dom';

const notFound = () => {
  return (
    <main className='h-4/5 flex flex-col items-center justify-center gap-2 tb:gap-4'>
      <h1 className='font-lilita text-2xl tb:text-4xl ds:text-6xl'>¡Houston, tenemos un problema!</h1>
      <img src={notfoundImg} alt="No encontrado" className='h-64 w-64 tb:h-96 tb:w-96'/>
      <Link to={'/'}>
        <button className='bg-secondary-color text-primary-light-color text-xs font-lilita uppercase tracking-[2px] shadow-bt-sh relative overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] cursor-pointer px-5 py-2.5 rounded-[2.5rem] border-[none] before:content-[""] before:absolute before:w-full before:h-full before:bg-[rgba(255,255,255,0.2)] before:skew-x-[-30deg] before:transition-[left] before:duration-[0.3s] before:ease-[ease-in-out] before:-left-full before:top-0 hover:scale-110 hover:before:left-full mb:mt-4 tb:text-lg lp:mt-2 lp:mb-3 ds:mt-7 ds:mb-0'>
          Volver a la tierra
        </button>
      </Link>
    </main>
  );
};

export default notFound;