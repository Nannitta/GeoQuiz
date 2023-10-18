import { InputProps } from './types/types';

const Input = ({type, placeholder, text, handleChange}: InputProps) => {
  return (
    <input type={type} placeholder={placeholder} name={text} id={text} onChange={handleChange} autoComplete='off'/>
  )
};

export default Input;