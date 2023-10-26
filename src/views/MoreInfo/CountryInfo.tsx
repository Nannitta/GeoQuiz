import { useParams } from 'react-router-dom';
import Input from '../../components/Input/Input';
import useCountryInfo from '../../hooks/useCountryInfo';

const CountryInfo = () => {
  const { pais } = useParams();
  const {country, error, loading} = useCountryInfo(pais);
  
  console.log(country);
  
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>;
  
  function handleChange () {
    console.log('hola');
  }

  return (
    <>
      <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange}/>
      { country
        ? <article>
          <h1>{pais}</h1>
          <h2>Capital: {country[0].capital}</h2>
          <h3>Continente: {country[0].continent}</h3>
          <p>Superficie total: {country[0].area}</p>
          <img src={country[0].flag} alt="Bandera" />
          <p>Población: {country[0].population}</p>
          <p>Moneda: </p>
          <p>Lengua oficial: </p>
        </article>
        : null
      }
    </>
  );
};

export default CountryInfo;