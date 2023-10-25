import { useEffect, useState } from 'react';
import useGuessContinent from '../../hooks/useGuessContinent';
import Map from './Map/Maps';

const GuessContinent = () => {
  const {countries, error, loading} = useGuessContinent();
  const [randomCountry, setRandomCountry] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>();

  useEffect(() => {
    setRandomCountry(Math.round(Math.random() * 245));
  }, [points])
   
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
    }

    checkIsCorrect();
  }, [userAnswer]);

  if (error) return <p>{error.message}</p>
  if (loading) return <p>Cargando...</p> 

  function handleAnswer (event: any): void {
    const idPath: string = event.target.classList.value;
    setUserAnswer(idPath);   
  }
  
  return (
    <main>
      {
        countries
          ? countries.map((country, index) => {
            if(index === randomCountry) {
              return <h1 key={index}>¿En qué continente de encuentra {country.name.toLocaleUpperCase()}?</h1>
            }
          })
          : null
      }
      <Map handleAnswer={handleAnswer}/>
      <div>
        <p>Puntuación</p>
        <span>{`${points} / 245`}</span>
      </div>
    </main>
  )
};

export default GuessContinent;