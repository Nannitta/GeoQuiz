import { useParams } from 'react-router-dom';
import Input from '../../components/Input/Input';
import useCountryInfo from '../../hooks/useCountryInfo';
import { CountryCurrencies, CountryLanguages } from '../../types/types';
// import { translateText } from '../../services';
// import { useEffect, useState } from 'react';
import SendButton from '../../components/SendButton/SendButton';

const CountryInfo = () => {
  const { pais } = useParams();
  // const [countryTranslate, setCountryTranslate] = useState<string>();
  const {country, error, loading} = useCountryInfo(pais);
  
  /*   useEffect(() => {
    const loadTranslate = async () => {
      if (pais) {
        const translateData = await translateText(pais);
        setCountryTranslate(translateData);
      }
    };
    
    loadTranslate();
  }, [pais]); */
    
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>;
  
  function handleChange () {
    //
  }

  function getCoin (): string | undefined {
    if (country) {
      const countryDivise: keyof CountryCurrencies = Object.keys(country[0].coin).toString();
      const countryCoin = country[0].coin[countryDivise].name + ' - ' + country[0].coin[countryDivise].symbol;
      return countryCoin;
    }
  }

  function getLanguages (): Array<string> {
    const getCountryLanguages: Array<string> = [];
    if (country) {
      for(const language in country[0].languages) {
        const languages: keyof CountryLanguages = country[0].languages[language];
        getCountryLanguages.push(languages);
      }
    }
    return getCountryLanguages;
  }

  return (
    <>
      <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange}/>
      <SendButton/>
      { country
        ? <article>
          <h1>{pais}</h1>
          <h2>Capital: {country[0].capital}</h2>
          <h3>Continente: {country[0].region}</h3>
          <p>Superficie total: {country[0].area} Km<sup>2</sup></p>
          <a href={country[0].maps.googleMaps} target='_blank' rel='noreferrer'>Ver en el mapa</a>
          <img src={country[0].flags} alt="Bandera" />
          <p>Población: {country[0].population} habitantes</p>
          <p>Moneda: {getCoin()}</p>
          <section> 
            <p>Lengua oficial:</p>
            <ul>
              {getLanguages().map((language, index) => {
                return <li key={index}>{language}</li>;
              } )}</ul>
          </section>
        </article>
        : null
      }
    </>
  );
};

export default CountryInfo;