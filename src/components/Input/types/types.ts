import { ChangeEvent } from 'react';

export type InputProps = {
  type: string
  placeholder: string
  text: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}