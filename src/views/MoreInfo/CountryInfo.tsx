import { useParams, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import useCountryInfo from '../../hooks/useCountryInfo';
import { CountryCurrencies, CountryLanguages } from '../../types/types';
import { translateText } from '../../services';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import SendButton from '../../components/SendButton/SendButton';
import { verifyTranslateCountry, capitalize } from '../../helpers/helpers';

const CountryInfo = () => {
  const { pais } = useParams();
  const [countryTranslate, setCountryTranslate] = useState<string>();
  const [regionTranslate, setRegionTranlate] = useState<string>();
  const [capitalTranslate, setCapitalTranslate] = useState<string>();
  const [translatedCountryLanguages, setTranslatedCountryLanguages] = useState<string[]>([]);
  const {country, error, loading} = useCountryInfo(countryTranslate);
  const navigate = useNavigate();
  let searchCountry: string = '';
  
  useEffect(() => {
    const loadTranslate = async () => {
      if (pais) {
        const translateData: string = await translateText(pais, 'es', 'en');
        setCountryTranslate(translateData);
      }
    };
    
    loadTranslate();
  }, [countryTranslate, pais]);
  
  useEffect(() => {
    const getCountryInfoTranslate = async () => {
      if (country) {
        const countryRegion = await translateText(country[0].region, 'en', 'es');
        setRegionTranlate(countryRegion);
        const countryCapital = await translateText(country[0].capital, 'en', 'es');
        setCapitalTranslate(countryCapital);
      }   
    };
  
    getCountryInfoTranslate();
  }, [country]);

  useEffect(() => {
    const getLanguages = async () => {
      if (country) {
        const getCountryLanguages: Array<string> = [];
        for(const language in country[0].languages) {    
          const languages: keyof CountryLanguages = country[0].languages[language];
          getCountryLanguages.push(languages);             
        }
        const translatedLanguages = await Promise.all(
          getCountryLanguages.map(async (language) => {
            return await translateText(language, 'en', 'es');
          })
        );
        setTranslatedCountryLanguages(translatedLanguages);
      }
    };

    getLanguages();
  }, [country]);
  
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>;
  
  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    searchCountry = event.currentTarget.value; 
  }
  
  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    searchCountry = await translateText(searchCountry, 'es', 'en');
    
    searchCountry = await verifyTranslateCountry(capitalize(searchCountry));
 
    navigate(`/${searchCountry}`);
  }
  
  function getCoin (): string | undefined {
    if (country) {
      const countryDivise: keyof CountryCurrencies = Object.keys(country[0].coin).toString().split(',')[0];
      
      const countryCoin = country[0].coin[countryDivise].name + ' - ' + country[0].coin[countryDivise].symbol;
      return countryCoin;
    }
  }
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange} autocomplete={'on'}/>
        <SendButton/>
      </form>
      { country && regionTranslate && capitalTranslate
        ? <article>
          <h1>{pais}</h1>
          <h2>Capital: {capitalTranslate}</h2>
          <h3>Continente: {regionTranslate}</h3>
          <p>Superficie total: {country[0].area} Km<sup>2</sup></p>
          <a href={country[0].maps.googleMaps} target='_blank' rel='noreferrer'>Ver en el mapa</a>
          <img src={country[0].flags} alt="Bandera" />
          <p>Población: {country[0].population} habitantes</p>
          <p>Moneda: {getCoin()}</p>
          <section> 
            <p>Lengua oficial:</p>
            <ul>
              {translatedCountryLanguages.map((language, index) => {           
                return <li key={index}>{language}</li>;
              })}</ul>
          </section>
        </article>
        : null
      }
    </>
  );
};

export default CountryInfo;