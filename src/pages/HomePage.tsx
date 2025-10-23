import '../App.css';
import Footer from '../components/Footer';
import GenresSection from '../components/GenresSection';
import Header from '../components/Header';

function HomePage() {
  return (
    // <div className='container mx-auto mb-5 sm:px-10'>
    <div className='flex flex-col items-center'>
      <Header />
      <GenresSection />
      <Footer />
    </div>
  );
}

export default HomePage;
