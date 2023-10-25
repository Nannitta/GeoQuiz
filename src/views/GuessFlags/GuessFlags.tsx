import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Input from '../../components/Input/Input';
import SendButton from '../../components/SendButton/SendButton';
import useGuessFlags from '../../hooks/useGuessFlags';

const GuessFlags = () => {
  const { countries, error, loading } = useGuessFlags();
  const [userAnswer, setUserAnswer] = useState<string>();
  const [points, setPoints] = useState<number>(0);
  const [randomCountry, setRandomCountry] = useState<number>(0);
  
  useEffect(() => {
    setRandomCountry(Math.floor(Math.random() * 249));
  }, [points]);

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const countryAnswer: string = event.currentTarget.value;
    setUserAnswer(countryAnswer);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (countries) {
      if (userAnswer === countries[randomCountry].name) {
        const newPoints: number = points + 1;
        setPoints(newPoints);
      }
      const formValue = document.querySelector('form');
      formValue?.reset();
    }
  };

  const handleSurrender = () => {
    setPoints(0);
    setRandomCountry(Math.floor(Math.random() * 249));
  };

  return (
    <main>
      <h1>¿A qué país pertenece la siguiente bandera?</h1>
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
        <Input type={'text'} placeholder={'Escribe aquí el país'} text={'country'} handleChange={handleChange}/>
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

export default GuessFlags;