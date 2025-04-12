export interface GenreCardProps {
  name: string;
  cover: string;
}

export default function GenreCard({ name, cover }: GenreCardProps) {
  return (
    <article className='relative h-48 w-96 cursor-pointer rounded-sm border shadow transition-all duration-100 hover:-translate-y-1 hover:border-2 hover:border-red-600'>
      <p className='bg-dark-background font-inter absolute top-0 right-0 z-10 m-3 rounded px-2 py-0.5 text-2xl font-bold capitalize'>
        {name}
      </p>
      <img
        className='h-full w-full rounded-sm object-cover'
        src={cover}
        alt={name}
      />
    </article>
  );
}
