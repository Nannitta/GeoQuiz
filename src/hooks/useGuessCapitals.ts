import { useState, useEffect } from 'react';
import { CountriesWithCapital } from '../types/types';
import { getCountryCapital } from '../services';

const useGuessCapitals = () => {
  const [countries, setCountries] = useState<CountriesWithCapital>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
    
        const data: CountriesWithCapital = await getCountryCapital();
        setCountries(data.filter((country) => country.capital.length > 0));
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

export default useGuessCapitals;