import Input from '../../components/Input/Input';
import Loading from '../../components/Loading/Loading';
import useGuessCapitals from '../../hooks/useGuessCapitals';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

const GuessCapitals = () => {
  const {countries, error, loading} = useGuessCapitals();
  const [userAnswer, setUserAnswer] = useState<string>();
  const [points, setPoints] = useState<number>(0);
  const [randomCountry, setRandomCountry] = useState<number>(0);
  const [usedPositions, setUsedPositions] = useState<number[]>([]);
  const [infoToast, setInfoToast] = useState<boolean>(false);

  useEffect(() => {
    if (!infoToast) {
      toast.info('¡Dificultad extra! La respuesta debe ser en inglés');
      setInfoToast(true);
    }
  }, [infoToast]);
   
  useEffect(() => {
    if (usedPositions.length === 0) {
      const allPositions: number[] = Array.from({ length: countries ? countries.length : 0 }, (_, index) => index);
      const newPositionIndex: number = Math.floor(Math.random() * allPositions.length);
      const newPosition: number = usedPositions[newPositionIndex];

      setUsedPositions((prevUsedPosition) => prevUsedPosition.filter((position) => position !== newPosition));
      setRandomCountry(newPosition);
    }
    setRandomCountry(Math.floor(Math.random() * 246));
  }, [points]);

  if (error) return <p>{error.message}</p>;
  if (loading) return <Loading/>;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const capitalAnswer = event.currentTarget.value.toLowerCase().trim();
    setUserAnswer(capitalAnswer);  
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (countries) {
      if (userAnswer === countries[randomCountry].capital[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()) {
        const newPoints: number = points + 1;
        setPoints(newPoints);
      }
      if (userAnswer !== countries[randomCountry].capital[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()) {
        setPoints(0);
        setRandomCountry(Math.floor(Math.random() * 246));
        toast.error(`Vaya, la respuesta era ${countries[randomCountry].capital[0]}!`);
      }
    }
    const formValue = document.querySelector('form');
    formValue?.reset();
  };

  const handleSurrender = () => {
    setPoints(0);
    setRandomCountry(Math.floor(Math.random() * 246));
  };
 
  
  return (
    <main className='text-primary-dark-color h-[85%] flex justify-center items-center lp:h-[90%]'>
      <section className='flex flex-col items-center justify-center gap-6 h-4/5 tb:rounded-[2.5rem] tb:gap-8 tb:w-[90%] lp:w-[65%] ds:w-[50%]'>
        {
          countries
            ? countries.map((country, index) => {
              if (country.name.toLocaleUpperCase() === 'ESPANA') {
                country.name = 'ESPAÑA';
              }
              if (index === randomCountry) {
                return <h1 key={index} className='font-lilita text-lg text-center pl-4 pr-4 h-14 tb:text-3xl'>¿Cuál es la capital de {country.name.toLocaleUpperCase()}?</h1>;
              }
            })
            : null
        }
        <div className='rounded-[2.5rem] w-44 h-32 tb:w-60 tb:h-44'>
          {
            countries
              ? countries.map((country, index) => {
                if (index === randomCountry) {
                  return <img src={country.flag} alt={country.name} key={index} className='rounded-[2.5rem] w-44 h-32 object-cover shadow-flag tb:w-60 tb:h-44'/>;
                }
              })
              : null
          }
        </div>
        <form onSubmit={handleSubmit}>
          <Input type={'text'} placeholder={'Escribe aquí la capital'} text={'capital'} handleChange={handleChange} autocomplete={'off'}/>
        </form>
        <div className='font-akshar flex justify-center w-full gap-x-8 tb:text-2xl'>
          <p>Puntuación</p>
          <span>{`${points} / 246`}</span>
        </div>
        <button 
          onClick={handleSurrender}
          className='bg-secondary-color text-primary-light-color text-xs font-lilita uppercase tracking-[2px] shadow-bt-sh relative overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] cursor-pointer px-5 py-2.5 rounded-[2.5rem] border-[none] before:content-[""] before:absolute before:w-full before:h-full before:bg-[rgba(255,255,255,0.2)] before:skew-x-[-30deg] before:transition-[left] before:duration-[0.3s] before:ease-[ease-in-out] before:-left-full before:top-0 hover:scale-110 hover:before:left-full mb:mt-4 tb:text-lg lp:mt-2 lp:mb-3 ds:mt-7 ds:mb-0'>
          Rendirse
        </button>
      </section>
    </main>
  );
};

export default GuessCapitals;