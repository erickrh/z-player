export default function AlbumCard({
  cover,
  name,
}: {
  cover: string;
  name: string;
}) {
  return (
    <article className='group relative h-48 w-96 cursor-pointer rounded-sm shadow outline transition-all duration-100 hover:outline-2 hover:outline-red-400'>
      <img
        className='h-full w-full rounded-sm object-cover transition-all duration-100 group-hover:opacity-70'
        src={cover}
        alt={`${name} cover`}
      />
      <p className='bg-dark-background font-inter mt-2 rounded text-xl font-bold capitalize transition-all duration-100 group-hover:text-red-300'>
        {name}
      </p>
    </article>
  );
}
