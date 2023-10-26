import { useState, useEffect } from 'react';
import { getCountryInfo } from '../services';
import { CountryRelevantInfoFetch } from '../types/types';

const useCountryInfo = (countryTranslate: string | undefined) => {
  const [country, setCountry] = useState<CountryRelevantInfoFetch>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const loadCountryInfo = async () => {
      try {
        setLoading(true);
        
        if (countryTranslate) {
          const data: CountryRelevantInfoFetch = await getCountryInfo(countryTranslate);
          setCountry(data);
        }
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadCountryInfo();
  }, []);

  return { country, error, loading};
};

export default useCountryInfo;