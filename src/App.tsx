import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/helloworld' element={<h1>Hello world</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
