export type API = string

export type FlagCountry = {
  flags: Flag
  translations: Translations
}

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