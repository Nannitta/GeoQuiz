import { MouseEvent, useEffect, useState } from 'react';
import useGuessContinent from '../../hooks/useGuessContinent';
import Map from './Map/Maps';
import Loading from '../../components/Loading/Loading';
import { toast } from 'react-toastify';

const GuessContinent = () => {
  const {countries, error, loading} = useGuessContinent();
  const [randomCountry, setRandomCountry] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>();
  const [usedPositions, setUsedPositions] = useState<number[]>([]);

  useEffect(() => {
    if (usedPositions.length === 0) {
      const allPositions: number[] = Array.from({ length: countries ? countries.length : 0 }, (_, index) => index);
      const newPositionIndex: number = Math.floor(Math.random() * allPositions.length);
      const newPosition: number = usedPositions[newPositionIndex];

      setUsedPositions((prevUsedPosition) => prevUsedPosition.filter((position) => position !== newPosition));
      setRandomCountry(newPosition);
    }
    setRandomCountry(Math.floor(Math.random() * 245));
  }, [points]);
   
  useEffect(() => {
    const checkIsCorrect = (): void => {
      if (countries && userAnswer) {   
        if (userAnswer === countries[randomCountry].continent) {
          const newPoints: number = points + 1;
          setPoints(newPoints);
          setUserAnswer('');
        } else {
          setPoints(0);
          setUserAnswer('');
          toast.error(`Has fallado! La respuesta era ${countries[randomCountry].continent}`);
        }
      }
    };

    checkIsCorrect();
  }, [userAnswer]);

  if (error) return <p>{error.message}</p>;
  if (loading) return <Loading/>; 

  function handleAnswer (event: MouseEvent<SVGGElement>) {
    const target = event.target as SVGGElement; 
    const idPath: string = target.classList.value;
    setUserAnswer(idPath);   
  }

  function handleSurrender () {
    setPoints(0);
    setRandomCountry(Math.floor(Math.random() * 245));
  } 
  
  return (
    <main className='h-[85%] flex flex-col justify-center items-center'>
      <section className='flex flex-col items-center justify-center h-4/5 tb:rounded-[2.5rem] tb:w-[90%]lp:w-[65%] ds:w-[50%]'>
        {
          countries
            ? countries.map((country, index) => {
              if (country.name === 'espana') {
                country.name = 'ESPAÑA';
              }
              if(index === randomCountry) {
                return <h1 key={index} className='font-lilita text-lg text-center pl-4 pr-4 h-14 tb:text-3xl tb:mt-8'>¿En qué continente de encuentra {country.name.toLocaleUpperCase()}?</h1>;
              }
            })
            : null
        }
        <Map handleAnswer={handleAnswer}/>
        <div className='font-akshar flex justify-center w-full gap-x-8 mb-4 tb:text-2xl'>
          <p>Puntuación</p>
          <span>{`${points} / 245`}</span>
        </div>
        <button           
          onClick={handleSurrender}
          className='bg-secondary-color text-primary-light-color text-xs font-lilita uppercase tracking-[2px] shadow-bt-sh relative overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] cursor-pointer px-5 py-2.5 rounded-[2.5rem] border-[none] before:content-[""] before:absolute before:w-full before:h-full before:bg-[rgba(255,255,255,0.2)] before:skew-x-[-30deg] before:transition-[left] before:duration-[0.3s] before:ease-[ease-in-out] before:-left-full before:top-0 hover:scale-110 hover:before:left-full mb:mt-4 tb:mb-9 tb:pb-4 tb:text-lg lp:mt-2 lp:mb-8 lp:pb-6 ds:mt-7 ds:mb-6'
        >Rendirse</button>
      </section>
    </main>
  );
};

export default GuessContinent;