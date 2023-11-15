import useListContries from '../../hooks/useListCountries';
import Input from '../../components/Input/Input';
import { ListCountries, ListCountriesFetch } from '../../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { translateText } from '../../services';
import { capitalize, verifyTranslateCountry } from '../../helpers/helpers';
import bg from '../../assets/images/background.svg';

const ListOfCountries = () => {
  const {countries, error, loading} = useListContries();
  const [letter, setLetter] = useState<string | null>(null);
  const navigate = useNavigate();
  const capitalLetter: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
  let searchCountry: string = '';

  useEffect(() => {
    const listOfCountries = document.querySelector(`#${letter} > ul`);
        
    listOfCountries?.classList.toggle('hidden');
    listOfCountries?.classList.toggle('flex');
    listOfCountries?.classList.toggle('flex-wrap');
    listOfCountries?.classList.toggle('justify-center');
    listOfCountries?.classList.toggle('items-center');
  }, [letter]);

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

  function handleClick(e: MouseEvent) {
    setLetter((e.target as HTMLElement).innerHTML);
  }

  return (
    <main className='mt-6'>
      <form onSubmit={handleSubmit} className='flex justify-center items-center mb-6'>
        <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange} autocomplete={'on'}/>
      </form>
      <div className='flex flex-wrap pl-5 pr-5 gap-2 justify-center items-center font-lilita text-4xl'>
        {
          capitalLetter
            ? capitalLetter.map((letter: string, index: number) => {
              return (
                <div key={index}>
                  <h2 className='hover:text-secondary-color cursor-pointer' onClick={handleClick}>{letter}</h2>
                </div>
              );
            })
            : null
        }
      </div>
      { letter
        ? <section key={letter} id={letter}>
          <ul className='hidden font-akshar text-lg absolute w-full gap-4 pl-6 pr-6 mt-4 pb-14' style={{'backgroundImage': `url(${bg})`}}>
            {
              setFilteresCountries(letter)
            }
          </ul>
        </section>
        : null
      }
    </main>
  );
};

export default ListOfCountries;