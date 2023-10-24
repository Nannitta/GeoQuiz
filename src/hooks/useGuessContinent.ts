import { useEffect, useState } from 'react';
import { CountriesWithContinent } from '../types/types';
import { getContinent } from '../services';

const useGuessContinent = () => {
  const [countries, setCountries] = useState<CountriesWithContinent>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    
    const loadCountries = async () => {
      try {
        setLoading(true);

        const data: CountriesWithContinent = await getContinent();
        setCountries(data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, [])

  return { countries, error, loading };
}

export default useGuessContinent;