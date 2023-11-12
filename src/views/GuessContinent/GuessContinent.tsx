import { MouseEvent, useEffect, useState } from 'react';
import useGuessContinent from '../../hooks/useGuessContinent';
import Map from './Map/Maps';

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
    setRandomCountry(Math.floor(Math.random() * 249));
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
        }
      }
    };

    checkIsCorrect();
  }, [userAnswer]);

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>; 

  function handleAnswer (event: MouseEvent<SVGGElement>) {
    const target = event.target as SVGGElement; 
    const idPath: string = target.classList.value;
    setUserAnswer(idPath);   
  }
  
  return (
    <main className='h-[85%] flex flex-col justify-center items-center'>
      <section className='flex flex-col items-center justify-center h-4/5 tb:shadow-container-sh tb:rounded-[2.5rem] tb:w-[90%] tb:bg-primary-light-color lp:w-[65%] ds:w-[50%]'>
        {
          countries
            ? countries.map((country, index) => {
              if(index === randomCountry) {
                return <h1 key={index} className='font-lilita text-lg text-center pl-4 pr-4 h-14 tb:text-3xl tb:mt-8'>¿En qué continente de encuentra {country.name.toLocaleUpperCase()}?</h1>;
              }
            })
            : null
        }
        <Map handleAnswer={handleAnswer}/>
        <div className='font-akshar flex justify-center w-full gap-x-8 tb:text-2xl tb:mb-8'>
          <p>Puntuación</p>
          <span>{`${points} / 245`}</span>
        </div>
      </section>
    </main>
  );
};

export default GuessContinent;