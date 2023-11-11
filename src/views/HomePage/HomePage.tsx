import { Link } from 'react-router-dom';
import logoHomePage from '../../assets/images/logoHomePage.webp';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <main className='text-primary-dark-color h-full lp:grid lp:grid-cols-homepage lp:justify-items-center lp:items-center'>
      <div className='flex justify-center'>
        <img 
          src={logoHomePage} 
          alt="Logo de la página principal" 
          className='w-64 mt-3 tb:mt-6 tb:mb-6 lp:mb-2 lp:object-contain lp:w-[500px] lp:mt-0'/>
      </div>
      <section
        className='px-8 flex flex-col gap-2 mb:gap-4 tb:px-[7rem] tb:gap-8 lp:p-0 lp:gap-2 lp:justify-center lp:shadow-container-sh lp:rounded-[2.5rem] lp:w-4/5 lp:h-[95%] lp:border-none lp:bg-primary-light-color ds:px-16 ds:gap-10 ds:h-[85%]'>
        <h1 
          className='font-lilita text-center text-2xl py-2 px-2 tb:text-4xl tb:mb-6 lp:mb-4 lp:text-5xl lp:px-8'>
          ¡Desata tu genio geográfico con GeoQuiz!
        </h1>
        <article className='flex flex-col lp:px-8'>
          <h2 
            className='font-akshar tb:text-2xl'>
            Adivina el país a partir de su bandera y conquista el mundo en un juego lleno de diversión y desafíos 🚩
          </h2>
          <Link to={'/adivina-la-bandera'} className='self-end'>
            <Button text={'Jugar'}></Button>
          </Link>
        </article>
        <article className='flex flex-col lp:px-8'>
          <h2 
            className='font-akshar tb:text-2xl'>
            Descubre el mundo adivinando la capital de cada país con su bandera. ¡Conviértete en el maestro de la geografía en segundos! 🏛️
          </h2>
          <Link to={'/adivina-la-capital'} className='self-end'>
            <Button text={'Jugar'}></Button>
          </Link>
        </article>
        <article className='flex flex-col lp:px-8'>
          <h2 
            className='font-akshar tb:text-2xl'>
            Adivina en qué continente se encuentra cada país. Desafía tu conocimiento geográfico y conquista el mundo, ¡todo en un abrir y cerrar de ojos! 🌍
          </h2>
          <Link to={'/adivina-el-continente'} className='self-end'>
            <Button text={'Jugar'}></Button>
          </Link>
        </article>
        <p 
          className='font-lilita text-center tb:text-3xl tb:mt-6 lp:mt-4'>
          Para aprender más visita la
          <Link to={'/lista-paises'}>
            <span className='text-secondary-color  pl-1'>GeoWiki</span>
          </Link></p>
      </section>
    </main>
  );
};

export default HomePage;