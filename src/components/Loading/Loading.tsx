import loader from '../../assets/images/loader.svg';

const Loading = () => {
  return (
    <div className='h-4/5 flex justify-center'>
      <img src={loader} alt="Cargando..." />
    </div>
  );
};

export default Loading;
