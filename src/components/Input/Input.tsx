import { InputProps } from './types/types';

const Input = ({type, placeholder, text, handleChange, autocomplete}: InputProps) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      name={text} 
      id={text} 
      onChange={handleChange} 
      autoComplete={autocomplete} 
      className='placeholder:font-placeholder placeholder:text-sm placeholder:text-center rounded-[2.5rem] bg-primary-light-color shadow-container-sh h-9 focus-within:outline-[#D811591A] px-5'/>
  );
};

export default Input;