import { Link } from 'react-router-dom';
import logoHomePage from '../../assets/images/logoHomePage.webp';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <main className='text-primary-dark-color h-full bg-background'>
      <div className='flex justify-center'>
        <img 
          src={logoHomePage} 
          alt="Logo de la página principal" 
          className='w-64 mt-3'/>
      </div>
      <section
        className='px-8 flex flex-col gap-2 mb:gap-8'>
        <h1 
          className='font-lilita text-center text-2xl py-2 px-2'>
          ¡Desata tu genio geográfico con GeoQuiz!
        </h1>
        <article className='flex flex-col'>
          <h2 
            className='font-akshar'>
            Adivina el país a partir de su bandera y conquista el mundo en un juego lleno de diversión y desafíos 🚩
          </h2>
          <Link to={'/adivina-la-bandera'} className='self-end'>
            <Button text={'Jugar'}></Button>
          </Link>
        </article>
        <article className='flex flex-col'>
          <h2 
            className='font-akshar'>
            Descubre el mundo adivinando la capital de cada país con su bandera. ¡Conviértete en el maestro de la geografía en segundos! 🏛️
          </h2>
          <Link to={'/adivina-la-capital'} className='self-end'>
            <Button text={'Jugar'}></Button>
          </Link>
        </article>
        <article className='flex flex-col'>
          <h2 
            className='font-akshar'>
            Adivina en qué continente se encuentra cada país. Desafía tu conocimiento geográfico y conquista el mundo, ¡todo en un abrir y cerrar de ojos! 🌍
          </h2>
          <Link to={'/adivina-el-continente'} className='self-end'>
            <Button text={'Jugar'}></Button>
          </Link>
        </article>
        <p 
          className='font-lilita text-center'>
          Para aprender más visita la
          <Link to={'/lista-paises'}>
            <span className='text-secondary-color  pl-1'>GeoWiki</span>
          </Link></p>
      </section>
    </main>
  );
};

export default HomePage;