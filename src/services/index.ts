import filterContinent from '../helpers/helpers';
import { API, CapitalCountry, ContinentCountry, CountriesTranslations, CountryRelevantInfo, FlagCountry } from '../types/types';

const API_URL: API = 'https://restcountries.com/v3.1/';

export const translateText = async (pais: string | undefined) => {
  const response = await fetch('https://api.textcortex.com/v1/texts/translations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer gAAAAABlOrrzOH7PLGSw5plUrv2PjprQqbVpEwTLq9m5aHfBsA_aOpIYVt59KaSzkx8wJIGFFN2xv8l-mvkh_lAJ09MbkFifJAHX5CgCfV6S8hx4AGAyGSDbaMHfwh-82y3PJ6KQ7EBL'
    },
    body: `{"source_lang":"es","target_lang":"en","text":"${pais}"}`
  });

  if (!response.ok) {
    throw new Error('Error al conectarse con el servidor');
  }

  const data = await response.json();

  return data.data.outputs[0].text;
};

export const getCountryAndFlag = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,flags`);

  if (!response.ok) {
    throw new Error('Error al conectarse con el servidor');
  }

  const data = await response.json();
  
  const countries = data.map((country: FlagCountry) => {
    return {
      flag: country.flags.svg,
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    };
  });
  
  return countries;
};

export const getCountryCapital = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,flags,capital`);

  if (!response.ok) {
    throw new Error('Error al conectarse con el servidor');
  }

  const data = await response.json();

  const countries = data.map((country: CapitalCountry) => {
    return {
      flag: country.flags.svg,
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(),
      capital: country.capital
    };
  });

  return countries;
};

export const getContinent = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations,region,subregion`);

  if (!response.ok) {
    throw new Error('Error al conectarse con el servidor');
  }

  const data = await response.json();
  
  const countries = data.filter((country: ContinentCountry) => country.region !== 'Antarctic').map((country: ContinentCountry) => {
    return {
      name: country.translations.spa.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(),
      continent: filterContinent(country)
    };
  });
  
  return countries;
};

export const getListNameCountries = async () => {
  const response = await fetch(`${API_URL}all?fields=name,translations`);

  if (!response.ok) {
    throw new Error('Error al conectarse con el servidor');
  }

  const data = await response.json();

  const countries = data.map((country: CountriesTranslations) => {
    return {
      name: country.translations.spa.common
    };
  });
  
  return countries;  
};

export const getCountryInfo = async (countryTranslate: string) => {
  const response = await fetch (`${API_URL}name/${countryTranslate}`);

  if (!response.ok) {
    throw new Error('Error al conectarse con el servidor');
  }

  const data = await response.json();

  const countryInfo = data.map((country: CountryRelevantInfo) => {
    return {
      capital: country.capital[0],
      region: country.region,
      area: country.area,
      population: country.population,
      coin: country.currencies,
      languages: country.languages,
      flags: country.flags.svg,
      maps: country.maps
    };
  });

  return countryInfo;
};