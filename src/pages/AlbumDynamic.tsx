import { Link, useParams } from 'react-router-dom';
import Manson from '@/assets/manson.webp';
import Arrow from '@/assets/arrow.svg?react';
import { useState } from 'react';

export default function AlbumDynamic() {
  const { genreId, albumId } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className='grid grid-cols-3'>
      <article className='col-span-1 flex h-screen flex-col justify-center bg-red-950'>
        <Link to={`/genre/${genreId}`} className='mb-10'>
          <Arrow className='h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
        </Link>

        <div className='space-y-5 px-2'>
          <img className='w-full rounded-sm' src={Manson} alt='manson' />
          <h2 className='font-inter mt-5 font-bold'>Name of the album</h2>
          <p className='font-karla'>
            <span className='font-bold'>Artist: </span>Marilyn Manson
          </p>
          <p className='font-karla'>
            <span className='font-bold'>Year: </span>1993
          </p>
        </div>
        <div className='flex justify-center'>
          <button className='group flex h-25 w-25 cursor-pointer items-center justify-center rounded-full bg-amber-50 transition-transform duration-100 hover:scale-110'>
            <p className='font-inter text-dark-background z-10 ml-2 text-5xl transition-transform duration-100 group-hover:scale-110'>
              ▶
            </p>
          </button>
        </div>
      </article>

      <article className='col-span-2 flex h-screen flex-col items-center justify-center bg-linear-to-r from-[#252a2d] to-black px-1'>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex h-20 w-full cursor-pointer items-center justify-between rounded-sm hover:bg-[#252a2d]'
        >
          <div className='flex'>
            <p className='font-inter mx-5 w-2'>{isHovered ? '▶' : 1}</p>
            <p className='font-inter'>Song's name</p>
          </div>
          <p className='mr-7'>02:46</p>
        </button>
      </article>
    </section>
  );
}
