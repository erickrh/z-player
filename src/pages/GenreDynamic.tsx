import AlbumCard from '../components/AlbumCard';
import Arrow from '../assets/arrow.svg?react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function GenreDynamic() {
  const { id } = useParams();
  const [headerImage, setHeader] = useState<string | undefined>();

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const { data, error } = await supabase
          .from('genres')
          .select('header')
          .eq('id', id)
          .single();

        if (error) console.error('Error fetching the headers', error.message);
        else {
          setHeader(data.header);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchHeader();
  }, [id]);

  return (
    <section>
      {headerImage ? (
        <img
          src={headerImage}
          alt='header'
          className='h-50 w-screen object-cover object-center shadow-md'
        />
      ) : (
        <div className='h-50 w-full bg-[#252a2d] shadow-md'></div>
      )}

      <article className='container m-5 mx-auto mb-20 px-10'>
        <div className='flex flex-col items-end'>
          <h1 className='text-2xl font-bold'>Albums</h1>
          <p className='text-gray-600'>Enjoy every last drop of sound</p>
        </div>

        <div className='mt-10 flex flex-wrap gap-x-5 gap-y-15'>
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
          <AlbumCard
            cover='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
            name='Marilyn Manson'
          />
        </div>
      </article>

      <div className='fixed inset-y-0 left-0 flex items-center'>
        <Link to='/'>
          <Arrow className='h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
        </Link>
      </div>
    </section>
  );
}
