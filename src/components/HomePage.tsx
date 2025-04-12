import '../App.css';
import Header from './Header';
import GenresSection from './GenresSection';
import Footer from './Footer';

function HomePage() {
  return (
    <div className='container mx-auto mb-5 px-10'>
      <Header />
      <GenresSection />
      <Footer />
    </div>
  );
}

export default HomePage;
