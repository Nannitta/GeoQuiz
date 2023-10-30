import { InputProps } from './types/types';

const Input = ({type, placeholder, text, handleChange, autocomplete}: InputProps) => {
  return (
    <input type={type} placeholder={placeholder} name={text} id={text} onChange={handleChange} autoComplete={autocomplete}/>
  );
};

export default Input;