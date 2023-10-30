import Input from '../../components/Input/Input';
import SendButton from '../../components/SendButton/SendButton';
import useGuessCapitals from '../../hooks/useGuessCapitals';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const GuessCapitals = () => {
  const {countries, error, loading} = useGuessCapitals();
  const [userAnswer, setUserAnswer] = useState<string>();
  const [points, setPoints] = useState<number>(0);
  const [randomCountry, setRandomCountry] = useState<number>(0);
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

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const capitalAnswer = event.currentTarget.value;
    setUserAnswer(capitalAnswer);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (countries) {
      if (userAnswer === countries[randomCountry].capital[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()) {
        const newPoints: number = points + 1;
        setPoints(newPoints);
      }
    }
    const formValue = document.querySelector('form');
    formValue?.reset();
  };

  const handleSurrender = () => {
    setPoints(0);
    setRandomCountry(Math.floor(Math.random() * 249));
  };

  return (
    <main>
      {
        countries
          ? countries.map((country, index) => {
            if (index === randomCountry) {
              return <h1 key={index}>¿Cuál es la capital de {country.name.toLocaleUpperCase()}?</h1>;
            }
          })
          : null
      }
      <div>
        {
          countries
            ? countries.map((country, index) => {           
              if (index === randomCountry) {         
                return <img src={country.flag} alt={country.name} key={index}/>;
              }          
            })
            : null
        }
      </div>
      <form onSubmit={handleSubmit}>
        <Input type={'text'} placeholder={'Escribe aquí la capital'} text={'capital'} handleChange={handleChange} autocomplete={'off'}/>
        <SendButton/>
      </form>
      <div>
        <p>Puntuación</p>
        <span>{`${points} / 250`}</span>
      </div>
      <button onClick={handleSurrender}>Rendirse</button>
    </main>
  );
};

export default GuessCapitals;