import { ContinentCountry } from '../types/types';

const filterContinent = (country: ContinentCountry) => {
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

export default filterContinent;