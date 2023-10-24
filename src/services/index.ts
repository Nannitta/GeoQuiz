import { API, CapitalCountry, ContinentCountry, FlagCountry } from '../types/types';

const API_URL: API = 'https://restcountries.com/v3.1/';

export const getCountryAndFlag = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,flags`);

  const data = await response.json();
  
  const countries = data.map((country: FlagCountry) => {
    return {
      flag: country.flags.svg,
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }
  });
  
  return countries;
};

export const getCountryCapital = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,flags,capital`);

  const data = await response.json();

  const countries = data.map((country: CapitalCountry) => {
    return {
      flag: country.flags.svg,
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(),
      capital: country.capital
    }
  })

  return countries;
}

export const getContinent = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,region,subregion`);

  const data = await response.json();

  const countries = data.filter((country: ContinentCountry) => country.region !== 'Antarctic').map((country: ContinentCountry) => {
    return {
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(),
      continent: country.region === 'Americas' ? (country.subregion === 'Caribbean' ? 'South America' : country.subregion || country.subregion === 'Central America' ? 'North America' : country.subregion) : country.region
    }
  })
  
  return countries;
}