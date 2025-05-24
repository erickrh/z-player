import GenreCard from './GenreCard';
import genresData from '@/data/genresData.json';

export default function GenresSection() {
  return (
    <>
      <section>
        <h2 className='font-karla mt-1 text-3xl font-normal'>Genres</h2>
        <section className='mt-4 flex flex-wrap justify-center gap-3'>
          {genresData.map((genre) => (
            <GenreCard
              key={genre.id}
              name={genre.name}
              cover={genre.cover}
              id={genre.id}
            />
          ))}
        </section>
      </section>
    </>
  );
}
