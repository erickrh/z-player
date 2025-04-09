import './App.css';
import Header from './components/Header';
import GenresSection from './components/GenresSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container mx-auto mb-5 px-10'>
      <Header />
      <GenresSection />
      <Footer />
    </div>
  );
}

export default App;
