import GenreCard, { GenreCardProps } from './GenreCard';
import genresData from '../data/genres.json';

const genresList: GenreCardProps[] = genresData.genres;

export default function GenresSection() {
  return (
    <section>
      <h2 className='font-karla mt-5 text-3xl font-normal'>Genres</h2>

      <section className='mt-5 flex flex-wrap justify-center gap-5'>
        {genresList.map((genre) => (
          <GenreCard key={genre.name} name={genre.name} image={genre.image} />
        ))}
      </section>
    </section>
  );
}
