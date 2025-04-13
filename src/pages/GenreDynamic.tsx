import AlbumCard from '../components/AlbumCard';
import Arrow from '../assets/arrow.svg?react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase';

interface albums {
  cover: string;
  created_at: string;
  genre: number;
  id: number;
  title: string;
}

export default function GenreDynamic() {
  const { genreId } = useParams();
  const [headerImage, setHeader] = useState<string>();
  const [albums, setAlbums] = useState<albums[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [headerResult, albumsResult] = await Promise.all([
          supabase.from('genres').select('header').eq('id', genreId).single(),
          supabase.from('albums').select('*').eq('genre', genreId),
        ]);

        if (headerResult.error) {
          console.error('Error fetching header:', headerResult.error.message);
        } else {
          setHeader(headerResult.data?.header);
        }

        if (albumsResult.error) {
          console.error('Error fetching albums:', albumsResult.error.message);
        } else {
          setAlbums(albumsResult.data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchData();
  }, [genreId]);

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

      <div className='fixed inset-y-0 left-0 flex items-center'>
        <Link to='/'>
          <Arrow className='h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
        </Link>
      </div>
    </section>
  );
}
