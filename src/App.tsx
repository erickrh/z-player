import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenreDynamic from './pages/GenreDynamic';
import HomePage from './pages/HomePage';
import AlbumDynamic from './pages/AlbumDynamic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/genre/:genreId' element={<GenreDynamic />} />
        <Route path='/genre/:genreId/:albumId' element={<AlbumDynamic />} />
        <Route path='/helloworld' element={<h1>Hello world</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
