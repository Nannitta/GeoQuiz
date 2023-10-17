import { API, Country } from '../types/types';

const API_URL: API = 'https://restcountries.com/v3.1/';

export const getCountryAndFlag = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,flags`);

  const data = await response.json();
  
  const countries = data.map((country: Country) => {
    return {
      flag: country.flags.svg,
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }
  });
  
  return countries;
};