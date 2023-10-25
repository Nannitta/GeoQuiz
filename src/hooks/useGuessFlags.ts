import { useState, useEffect } from 'react';
import { getCountryAndFlag } from '../services/index';
import { CountriesWithFlag } from '../types/types';

const useGuessFlags = () => {
  const [countries, setCountries] = useState<CountriesWithFlag>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
        
        const data: CountriesWithFlag = await getCountryAndFlag();
        setCountries(data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  return { countries, error, loading };
};

export default useGuessFlags;