import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Genre from './components/Genre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/genre' element={<Genre />} />

        <Route path='/helloworld' element={<h1>Hello world</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
