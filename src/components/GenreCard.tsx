export interface GenreCardProps {
  name: string;
  image: string;
}

export default function GenreCard({ name, image }: GenreCardProps) {
  return (
    <article className='relative h-60 w-96 cursor-pointer rounded-sm border shadow transition-all duration-100 hover:-translate-y-1 hover:border-2 hover:border-red-600'>
      <p className='bg-dark-background font-inter absolute top-0 right-0 z-10 m-3 rounded px-3 py-1 text-2xl font-bold'>
        {name}
      </p>
      <img
        className='h-full w-full rounded-sm object-cover'
        src={image}
        alt={name}
      />
    </article>
  );
}
