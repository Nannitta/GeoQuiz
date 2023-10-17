export type API = string

export type Country = {
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

export type Countries = CountryFetch[]

export type CountryFetch = {
  flag: string
  name: string
}