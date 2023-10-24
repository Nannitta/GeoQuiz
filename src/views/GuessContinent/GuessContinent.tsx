import { useEffect, useState } from 'react';
import useGuessContinent from '../../hooks/useGuessContinent';
import Map from './Map/Maps';

const GuessContinent = () => {
  const {countries, error, loading} = useGuessContinent();
  const [randomCountry, setRandomCountry] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>();
  const [color, setColor] = useState<string>('#E0E0E0');

  useEffect(() => {
    setRandomCountry(Math.round(Math.random() * 249));
  }, [points])
   
  if (error) return <p>{error.message}</p>
  if (loading) return <p>Cargando...</p> 

  function changeColor (event: any) {
		const idPath: string = event.target.classList.value;
					
		const groupSvg = document.querySelectorAll(`.${idPath}`);

		groupSvg.forEach((path: Element) => {
			if (path instanceof SVGElement) {
				if (path instanceof SVGElement) {
					if (path.style.fill !== 'green') {
            path.style.fill = color;
          } else {
            setColor('green');
            path.style.fill = color;
          }
				}
			}
		})

    setUserAnswer(idPath);
	}
  
  if (countries) {  
    console.log(countries[randomCountry], 'API');
    console.log(userAnswer);
    if (userAnswer === countries[randomCountry].continent) {
      const newPoints = points + 1;
      setPoints(newPoints);
      setUserAnswer('');
    }
  }

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
      <Map changeColor={changeColor}/>
      <div>
        <p>Puntuación</p>
        <span>{`${points} / 245`}</span>
      </div>
    </main>
  )
};

export default GuessContinent;