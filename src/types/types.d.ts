export type API = string

type Flag = {
  alt: string
  png: string
  svg: string
}

type Translations = {
  spa: CountryName
}

type CountryName = {
  common: string
}

export type FlagCountry = {
  flags: Flag
  translations: Translations
}

type FlagCountryFetch = {
  flag: string
  name: string
}

export type CountriesWithFlag = FlagCountryFetch[]

export type CapitalCountry = {
  flags: Flag
  translations: Translations
  capital: Array<string>
}

type CapitalCountryFecth = {
  flag: string
  name: string
  capital: Array<string>
}

export type CountriesWithCapital = CapitalCountryFecth[]

export type ContinentCountry = {
  translations: Translations
  region: string
  subregion: string
}

type ContinentCountryFetch = {
  name: string
  continent: string
}

export type CountriesWithContinent = ContinentCountryFetch[]

export type CountriesTranslations = {
  translations: Translations
}

type ListCountriesFetch = {
  name : string
}

export type ListCountries = ListCountriesFetch[]

export type CountryRelevantInfo = {
  capital: string
  region: string
  area: number
  population: number
  currencies: object
  languages: Array<string>
  flags: Flag
}

export type CountryRelevantInfoFetch = CountryRelevantInfo[]