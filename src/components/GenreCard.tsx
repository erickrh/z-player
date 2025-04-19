import { GenreCardProps } from '@/types/interfaces';
import { Link } from 'react-router-dom';

export default function GenreCard({ name, cover, id }: GenreCardProps) {
  return (
    <Link to={`/genre/${id}`}>
      <article className='group relative h-48 w-96 cursor-pointer rounded-sm shadow outline transition-all duration-200 hover:-translate-y-1 hover:outline-2 hover:outline-red-400'>
        <p className='bg-dark-background font-inter absolute right-0 bottom-0 z-10 m-3 rounded px-2 py-0.5 text-2xl font-bold capitalize transition-all duration-200 group-hover:text-red-300'>
          {name}
        </p>
        <img
          className='h-full w-full rounded-sm object-cover transition-all duration-200 group-hover:opacity-70'
          src={cover}
          alt={name}
        />
      </article>
    </Link>
  );
}
