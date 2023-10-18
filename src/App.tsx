import Header from './components/Header/Header';
import HomePage from './views/HomePage/HomePage';
import GuessFlags from './views/GuessFlags/GuessFlags';
import GuessCapitals from './views/GuessCapitals/GuessCapitals';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adivina-la-bandera' element={<GuessFlags/>}/>
        <Route path='/adivina-la-capital' element={<GuessCapitals/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;