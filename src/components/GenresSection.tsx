import { useEffect, useState } from 'react';
import BigCard, { BigCardProps } from './BigCard';
import { supabase } from '../supabase';

export default function GenresSection() {
  const [genres, setGenres] = useState<BigCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data, error } = await supabase.from('genres').select('*');
        if (error) console.error('Supabase error:', error.message);
        else setGenres(data);
      } catch (err) {
        console.error('Error fetching genres:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex h-screen items-center justify-center'>
          <div className='h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-white' />
        </div>
      ) : (
        <section>
          <h2 className='font-karla mt-1 text-3xl font-normal'>Genres</h2>

          <section className='mt-4 flex flex-wrap justify-center gap-5'>
            {genres.map((genre) => (
              <BigCard
                key={genre.id}
                name={genre.name}
                cover={genre.cover}
                id={genre.id}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
}
