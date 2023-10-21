import { useEffect, useState } from 'react';
import useGuessContinent from '../../hooks/useGuessContinent';
import Map from './Map/Maps';

const GuessContinent = () => {
  const {countries, error, loading} = useGuessContinent();
  const [randomCountry, setRandomCountry] = useState<Number>(0);
  const [points, setPoints] = useState<Number>(0);
  const [userAnswer, setUserAnswer] = useState<string>();

  useEffect(() => {
    setRandomCountry(Math.round(Math.random() * 249));
  }, [points])

  if (error) return <p>{error.message}</p>
  if (loading) return <p>Cargando...</p>

  return (
    <main>
      {
        countries
          ? countries.map((country, index) => {
            if( index === randomCountry) {
              return <h1 key={index}>¿En qué continente de encuentra {country.name.toLocaleUpperCase()}?</h1>
            }
          })
          : null
      }
      <Map/>
      <div>
        <p>Puntuación</p>
        <span>{`${points} / 250`}</span>
      </div>
    </main>
  )
};

export default GuessContinent;