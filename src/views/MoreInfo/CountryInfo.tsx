import { useParams, useNavigate, NavLink } from 'react-router-dom';
import Input from '../../components/Input/Input';
import useCountryInfo from '../../hooks/useCountryInfo';
import { CountryCurrencies, CountryLanguages } from '../../types/types';
import { translateText } from '../../services';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { verifyTranslateCountry, capitalize } from '../../helpers/helpers';
import continent from '../../assets/images/continent.svg';
import area from '../../assets/images/area.svg';
import population from '../../assets/images/popoulation.svg';
import coin from '../../assets/images/coin.svg';
import languages from '../../assets/images/languages.svg';

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
    <main className='pl-6 pr-6 tb:bg-primary-light-color tb:shadow-container-sh tb:rounded-[2.5rem] tb:flex tb:flex-col tb:items-center tb:ml-12 tb:mr-12 tb:mt-6 lp:mr-48 lp:ml-48 ds:mr-96 ds:ml-96 ds:h-4/5'>
      <form onSubmit={handleSubmit} className='flex justify-center mt-4 mb-4'>
        <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange} autocomplete={'on'}/>
      </form>
      { country && regionTranslate && capitalTranslate
        ? <div className='lp:flex lp:gap-20 lp:mb-8 ds:justify-center ds:items-center ds:h-3/5 ds:mt-6'>
          <article className='font-akshar tb:text-2xl ds:w-96'>
            <h1 className='font-lilita text-3xl tb:mt-16 tb:text-5xl lp:mt-4 ds:mt-8'>{pais}</h1>
            <h2 className='text-xl tb:text-3xl'>{capitalTranslate}</h2>
            <div className='flex gap-3 items-center pt-2 tb:pt-4 ds:pt-12'>
              <img src={continent} alt="Icono continente" className='w-6 h-6 tb:w-8 tb:h-8'/>
              <h3>Continente: {regionTranslate}</h3>
            </div>
            <div className='flex gap-3 items-center pt-2'>
              <img src={area} alt="Icono area" className='w-6 h-6 tb:w-8 tb:h-8'/>
              <p>Superficie total: {country[0].area} Km<sup>2</sup></p>
            </div>
            <div className='flex gap-3 items-center pt-2'>
              <img src={population} alt="Icono poblacion" className='w-6 h-6 tb:w-8 tb:h-8'/>
              <p>Población: {country[0].population} habitantes</p>
            </div>
            <div className='flex gap-3 items-center pt-2'>
              <img src={coin} alt="Icono moneda" className='w-6 h-6 tb:w-8 tb:h-8'/>
              <p>Moneda: {getCoin()}</p>
            </div>
            <div className='flex gap-3 items-center pt-2'>
              <img src={languages} alt="Icono idiomas" className='w-6 h-6 tb:w-8 tb:h-8'/>
              <p>Idiomas oficiales:</p>
            </div>
            <section>
              <ul className='flex gap-6 pl-9 w-80 flex-wrap tb:pl-11 ds:text-lg'>
                {translatedCountryLanguages.map((language, index) => {
                  return <li key={index}>{language}</li>;
                })}</ul>
            </section>
          </article>
          <aside className='flex flex-col justify-center items-center pt-6 pb-12 lp:pb-0 lp:pt-0 ds:mt-6'>
            <img src={country[0].flags} alt="Bandera" className='rounded-[2.5rem] w-44 h-32 object-cover shadow-flag mb-5 tb:w-60 tb:h-44'/>
            <button className='bg-secondary-color text-primary-light-color text-xs font-lilita uppercase tracking-[2px] shadow-bt-sh relative overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] cursor-pointer px-5 py-2.5 rounded-[2.5rem] border-[none] before:content-[""] before:absolute before:w-full before:h-full before:bg-[rgba(255,255,255,0.2)] before:skew-x-[-30deg] before:transition-[left] before:duration-[0.3s] before:ease-[ease-in-out] before:-left-full before:top-0 hover:scale-110 hover:before:left-full mb:mt-4 tb:text-lg lp:mt-2 lp:mb-3 ds:mt-7 ds:mb-0'>
              <NavLink to={country[0].maps.googleMaps} target='_blank' rel='noreferrer'>Ver en el mapa</NavLink>
            </button>
          </aside>
        </div>
        : null
      }
    </main>
  );
};

export default CountryInfo;