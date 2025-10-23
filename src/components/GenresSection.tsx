import GenreCard from './GenreCard';
import genresData from '@/data/genresData.json';

export default function GenresSection() {
  return (
    <section className='mt-4'>
      <div className='mt-4 mr-5 flex flex-col items-end sm:-mt-2 sm:mr-44'>
        <h1 className='font-karla text-2xl font-bold'>Genres</h1>
        <p className='text-gray-600'>Welcome to z-player</p>
      </div>
      <div className='mt-6 flex flex-wrap justify-center gap-3'>
        {genresData.map((genre) => (
          <GenreCard
            key={genre.id}
            name={genre.name}
            cover={genre.cover}
            id={genre.id}
          />
        ))}
      </div>
    </section>
  );
}
