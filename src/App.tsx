import Header from './components/Header/Header';
import HomePage from './views/HomePage/HomePage';
import GuessFlags from './views/GuessFlags/GuessFlags';
import GuessCapitals from './views/GuessCapitals/GuessCapitals';
import GuessContinent from './views/GuessContinent/GuessContinent';
import ListCountries from './views/MoreInfo/ListCountries';
import CountryInfo from './views/MoreInfo/CountryInfo';
import Footer from './components/Footer/Footer';
import NotFound from './views/NotFound/NotFound';
import { Routes, Route, useLocation } from 'react-router-dom';

function App () {
  const location = useLocation();
  const hideHomePage = location.pathname === '/';
  
  return (
    <>
      {!hideHomePage && <Header/>}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/adivina-la-bandera' element={<GuessFlags/>}/>
        <Route path='/adivina-la-capital' element={<GuessCapitals/>}/>
        <Route path='/adivina-el-continente' element={<GuessContinent/>}/>
        <Route path='/lista-paises' element={<ListCountries/>}/>
        <Route path='/pais/:pais' element={<CountryInfo/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;