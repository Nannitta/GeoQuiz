import { useState, useEffect } from 'react';
import { getCountryInfo } from '../services';

const useCountryInfo = (name: string | undefined) => {
  const [country, setCountry] = useState();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const loadCountryInfo = async () => {
      try {
        setLoading(true);
        
        const data = await getCountryInfo(name);
        setCountry(data);
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