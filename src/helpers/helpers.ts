import { ContinentCountry } from '../types/types';

export const filterContinent = (country: ContinentCountry) => {
  if (country.region === 'Americas') {
    if (country.subregion === 'Caribbean' || country.subregion === 'South America') {
      return 'South America';
    } else if (country.subregion || country.subregion === 'Central America') {
      return 'North America';
    } else {
      return country.subregion;
    }

  } else {
    return country.region;
  }
};

export const verifyTranslateCountry = async (countryTranslate: string) => {
  if (countryTranslate === 'Argelia') {
    countryTranslate = 'Algeria';
  }

  if (countryTranslate === 'Alandia') {
    countryTranslate = 'Åland Islands';
  }

  if (countryTranslate === 'Belice') {
    countryTranslate = 'Belize';
  }

  if (countryTranslate === 'Curazao') {
    countryTranslate = 'Curaçao';
  }

  if (countryTranslate === 'Marfil Coast') {
    countryTranslate = 'Ivory Coast';
  }

  if (countryTranslate === 'Congo (Rep. Dem.).') {
    countryTranslate = 'DR Congo';
  }

  if (countryTranslate === 'Camboya') {
    countryTranslate = 'Cambodia';
  }

  if (countryTranslate === 'Croacia') {
    countryTranslate = 'Croatia';
  }

  if (countryTranslate === 'Dutch Caribbean') {
    countryTranslate = 'Caribbean Netherlands';
  }

  if (countryTranslate === 'Eslovenia') {
    countryTranslate = 'Slovenia';
  }

  if (countryTranslate === 'Filipinas') {
    countryTranslate = 'Philippines';
  }

  if (countryTranslate === 'Guadalupe') {
    countryTranslate = 'Guadeloupe';
  }

  if (countryTranslate === 'Greenlandia') {
    countryTranslate = 'Greenland';
  }

  if (countryTranslate === 'Cocos or Keeling Islands') {
    countryTranslate = 'Cocos (Keeling) Islands';
  }

  if (countryTranslate === 'Irlanda') {
    countryTranslate = 'Ireland';
  }

  if (countryTranslate === 'Islas Faroe') {
    countryTranslate = 'Faroe Islands';
  }

  if (countryTranslate === 'United Kingdom Virgin Islands') {
    countryTranslate = 'British Virgin Islands';
  }

  if (countryTranslate === 'Islas Cook') {
    countryTranslate = 'Cook Islands';
  }

  if (countryTranslate === 'Islas Tokelau') {
    countryTranslate = 'Tokelau';
  }

  if (countryTranslate === 'Islandia') {
    countryTranslate = 'Iceland';
  }

  if (countryTranslate === 'Svalbard Islands and Jan Mayen') {
    countryTranslate = 'Svalbard and Jan Mayen';
  }

  if (countryTranslate === 'Islas Pitcairn') {
    countryTranslate = 'Pitcairn Islands';
  }

  if (countryTranslate === 'Islas Marshall') {
    countryTranslate = 'Marshall Islands';
  }

  if (countryTranslate === 'Kirguizistán') {
    countryTranslate = 'Kyrgyzstan';
  }

  if (countryTranslate === 'Mauricio') {
    countryTranslate = 'Mauritius';
  }

  if (countryTranslate === 'Malasia') {
    countryTranslate = 'Malaysia';
  }

  if (countryTranslate === 'Martinica') {
    countryTranslate = 'Martinique';
  }

  if (countryTranslate === 'Meeting') {
    countryTranslate = 'Réunion';
  }

  if (countryTranslate === 'St. Helena, Ascension and Tristán de Acuña') {
    countryTranslate = 'Saint Helena, Ascension and Tristan da Cunha';
  }

  if (countryTranslate === 'San Bartolomé') {
    countryTranslate = 'Saint Barthélemy';
  }

  if (countryTranslate === 'Swaziland') {
    countryTranslate = 'Eswatini';
  }

  if (countryTranslate === 'St. Pierre and Miquelon') {
    countryTranslate = 'Saint Pierre and Miquelon';
  }

  if (countryTranslate === 'St. Lucia') {
    countryTranslate = 'Saint Lucia';
  }

  if (countryTranslate === 'St. Kitts and Nevis') {
    countryTranslate = 'Saint Kitts and Nevis';
  }

  if (countryTranslate === 'Siria') {
    countryTranslate = 'Syria';
  }

  if (countryTranslate === 'Sao Tome and Principe') {
    countryTranslate = 'São Tomé and Príncipe';
  }

  if (countryTranslate === 'Tailandia') {
    countryTranslate = 'Thailand';
  }

  if (countryTranslate === 'East Timor') {
    countryTranslate = 'Timor-Leste';
  }

  return countryTranslate;
};

export const capitalize = (text: string) => {
  const firstLetter: string = text.charAt(0);
  const rest: string = text.slice(1);
  return firstLetter.toUpperCase() + rest;
};

export const verifyTranslateCapital = async (capitalTranslate: string) => {
  if (capitalTranslate === '') {
    capitalTranslate = '';
  }
};