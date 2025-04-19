import AlbumCard from '../components/AlbumCard';
import Arrow from '../assets/arrow.svg?react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase';
import genresData from '@/data/genresData.json';
import { Album } from '@/types/interfaces';

export default function GenreDynamic() {
  const { genreId } = useParams();
  const [albums, setAlbums] = useState<Album[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: albumsResult, error } = await supabase
          .from('albums')
          .select('*')
          .eq('genre', genreId);

        if (error) {
          console.error('Error fetching albums:', error.message);
        } else {
          setAlbums(albumsResult);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchData();
  }, [genreId]);

  const headerImage = genresData.find(
    (genre) => genreId === genre.id.toString()
  )?.header;

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

        {albums && (
          <div className='mt-10 flex flex-wrap gap-x-5 gap-y-15'>
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                cover={album.cover}
                name={album.title}
                genreId={genreId!}
                albumId={album.id}
              />
            ))}
          </div>
        )}
      </article>

      <Link to='/' className='fixed top-1/2 left-0 -translate-y-1/2'>
        <Arrow className='h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
      </Link>
    </section>
  );
}
