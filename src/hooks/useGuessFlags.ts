import { useState, useEffect } from 'react';
import { getCountryAndFlag } from '../services/index';
import { Countries } from '../types/types';

const useGuessFlags = () => {
  const [countries, setCountries] = useState<Countries>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
        
        const data: Countries = await getCountryAndFlag();
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