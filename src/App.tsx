import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenreDynamic from './pages/GenreDynamic';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/genre/:genreId' element={<GenreDynamic />} />
        <Route path='/genre/:genreId/:albumId' element={<p>Hello</p>} />
        <Route path='/helloworld' element={<h1>Hello world</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
