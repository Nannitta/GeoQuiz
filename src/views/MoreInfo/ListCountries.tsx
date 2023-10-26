import useListContries from '../../hooks/useListCountries';
import Input from '../../components/Input/Input';
import SendButton from '../../components/SendButton/SendButton';
import { ListCountries } from '../../types/types';
import { Link } from 'react-router-dom';

const ListOfCountries = () => {
  const {countries, error, loading} = useListContries();
 
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Cargando...</p>;

  function handleChange () {
    console.log('hola');
  }

  function setFilteresCountries (letter: string) {
    const filterCountries: ListCountries = [];
    countries?.map((country) => {
      if (country.name.split('')[0] === letter) {
        filterCountries.push(country);
      } 
    });

    const listOfFilteredCountries = filterCountries.map((country, index) => {
      return <Link key={index} to={`/${country.name}`}>
        <li>{country.name}</li>
      </Link>;
    });

    return listOfFilteredCountries;
  }

  return (
    <main>
      <form>
        <Input type={'text'} placeholder={'Buscador'} text={'pais'} handleChange={handleChange}/>
        <SendButton/>
      </form>
      <section>
        <h2>A</h2>
        <ul>
          {
            setFilteresCountries('A')
          }
        </ul>
      </section>
      <section>
        <h2>B</h2>
        <ul>
          {
            setFilteresCountries('B')
          }
        </ul>
      </section>
      <section>
        <h2>C</h2>
        <ul>
          {
            setFilteresCountries('C')
          }
        </ul>
      </section>
      <section>
        <h2>D</h2>
        <ul>
          {
            setFilteresCountries('D')
          }
        </ul>
      </section>
      <section>
        <h2>E</h2>
        <ul>
          {
            setFilteresCountries('E')
          }
        </ul>
      </section>
      <section>
        <h2>F</h2>
        <ul>
          {
            setFilteresCountries('F')
          }
        </ul>
      </section>
      <section>
        <h2>G</h2>
        <ul>
          {
            setFilteresCountries('G')
          }
        </ul>
      </section>
      <section>
        <h2>H</h2>
        <ul>
          {
            setFilteresCountries('H')
          }
        </ul>
      </section>
      <section>
        <h2>I</h2>
        <ul>
          {
            setFilteresCountries('I')
          }
        </ul>
      </section>
      <section>
        <h2>J</h2>
        <ul>
          {
            setFilteresCountries('J')
          }
        </ul>
      </section>
      <section>
        <h2>K</h2>
        <ul>
          {
            setFilteresCountries('K')
          }
        </ul>
      </section>
      <section>
        <h2>L</h2>
        <ul>
          {
            setFilteresCountries('L')
          }
        </ul>
      </section>
      <section>
        <h2>M</h2>
        <ul>
          {
            setFilteresCountries('M')
          }
        </ul>
      </section>
      <section>
        <h2>N</h2>
        <ul>
          {
            setFilteresCountries('N')
          }
        </ul>
      </section>
      <section>
        <h2>O</h2>
        <ul>
          {
            setFilteresCountries('O')
          }
        </ul>
      </section>
      <section>
        <h2>P</h2>
        <ul>
          {
            setFilteresCountries('P')
          }
        </ul>
      </section>
      <section>
        <h2>R</h2>
        <ul>
          {
            setFilteresCountries('R')
          }
        </ul>
      </section>
      <section>
        <h2>S</h2>
        <ul>
          {
            setFilteresCountries('S')
          }
        </ul>
      </section>
      <section>
        <h2>T</h2>
        <ul>
          {
            setFilteresCountries('T')
          }
        </ul>
      </section>
      <section>
        <h2>U</h2>
        <ul>
          {
            setFilteresCountries('U')
          }
        </ul>
      </section>
      <section>
        <h2>V</h2>
        <ul>
          {
            setFilteresCountries('V')
          }
        </ul>
      </section>
      <section>
        <h2>W</h2>
        <ul>
          {
            setFilteresCountries('W')
          }
        </ul>
      </section>
      <section>
        <h2>Y</h2>
        <ul>
          {
            setFilteresCountries('Y')
          }
        </ul>
      </section>
      <section>
        <h2>Z</h2>
        <ul>
          {
            setFilteresCountries('Z')
          }
        </ul>
      </section>
    </main>
  );
};

export default ListOfCountries;