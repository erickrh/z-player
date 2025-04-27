import { Link } from 'react-router-dom';

export default function AlbumCard({
  cover,
  name,
  genreId,
  albumId,
}: {
  cover: string;
  name: string;
  genreId: string;
  albumId: number;
}) {
  return (
    <Link to={`/genre/${genreId}/${albumId}`}>
      <article className='group relative h-48 w-[calc(100vw-2px)] cursor-pointer rounded-sm shadow outline transition-all duration-100 hover:outline-2 hover:outline-red-400 sm:w-96'>
        <img
          className='h-full w-full rounded-sm object-cover transition-all duration-100 group-hover:opacity-70'
          src={cover}
          alt={`${name} cover`}
        />
        <p className='bg-dark-background font-inter mt-2 rounded text-xl font-bold capitalize transition-all duration-100 group-hover:text-red-300'>
          {name}
        </p>
      </article>
    </Link>
  );
}
