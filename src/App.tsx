import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenreDynamic from './components/GenreDynamic';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/genre' element={<GenreDynamic />} />

        <Route path='/helloworld' element={<h1>Hello world</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
