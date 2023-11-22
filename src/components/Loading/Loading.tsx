import loader from '../../assets/images/loader.svg';

const Loading = () => {
  return (
    <div className='h-4/5 flex justify-center items-center'>
      <img src={loader} alt="Cargando..." className='w-52 h-52'/>
    </div>
  );
};

export default Loading;
