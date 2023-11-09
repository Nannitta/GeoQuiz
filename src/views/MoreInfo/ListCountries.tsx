import useListContries from '../../hooks/useListCountries';
import Input from '../../components/Input/Input';
import SendButton from '../../components/SendButton/SendButton';
import { ListCountries, ListCountriesFetch } from '../../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { translateText } from '../../services';
import { capitalize, verifyTranslateCountry } from '../../helpers/helpers';

const ListOfCountries = () => {
  const {countries, error, loading} = useListContries();
  const navigate = useNavigate();
  const capitalLetter: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
  let searchCountry: string = '';
 
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

  function setFilteresCountries (letter: string) {
    const filterCountries: ListCountries = [];
    countries?.filter((country: ListCountriesFetch) => country.name !== 'Antártida' 
    && country.name !== 'Islas Heard y McDonald' 
    && country.name !== 'Isla Bouvet' 
    && country.name !== 'Macao'
    && country.name !== 'Omán'
    && country.name !== 'Sint Maarten').map((country) => {
      if (country.name.split('')[0] === letter) {
        filterCountries.push(country);
      } 
    });

    const listOfFilteredCountries = filterCountries.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    
      if (a.name > b.name) {
        return 1;
      }
      return 0;  
    }).map((country, index) => {
      return <Link key={index} to={`/${country.name}`}>
        <li>{country.name}</li>
      </Link>;
    });    
    
    return listOfFilteredCountries;
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange} autocomplete={'on'}/>
        <SendButton/>
      </form>
      {
        capitalLetter
          ? capitalLetter.map((letter: string) => {
            return (
              <section key={letter}>
                <h2>{letter}</h2>
                <ul>
                  {
                    setFilteresCountries(letter)
                  }
                </ul>
              </section>
            );
          })
          : null
      }
    </main>
  );
};

export default ListOfCountries;