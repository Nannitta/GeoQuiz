import { useEffect, useState } from 'react';
import { getListNameCountries } from '../services';
import { ListCountries } from '../types/types';

const useListContries = () => {
  const [countries, setCountries] = useState<ListCountries>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const loadListCountries = async () => {
      try {
        setLoading(true);

        const data: ListCountries = await getListNameCountries();      
        setCountries(data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadListCountries();
  }, []);

  return { countries, error, loading };
};

export default useListContries;