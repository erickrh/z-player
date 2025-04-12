import AlbumCard from './AlbumCard';
// import { ReactComponent as Arrow } from '../assets/arrow.svg';
import Arrow from '../assets/arrow.svg?react';
import slipknotVideo from '../assets/slipknot1.mp4';

export default function GenreDynamic() {
  return (
    <section>
      {/*
      Video banner is still under experiments so do not remove this code
      <img
        src='https://www.metro951.com/wp-content/uploads/2015/05/Marilyn-Manson.jpg'
        alt=''
        className='h-50 w-screen object-cover object-center shadow-md'
      />
      */}
      <video
        className='h-50 w-screen object-cover object-center shadow-md'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={slipknotVideo} type='video/mp4' />
        Your browser does not support the video.
      </video>

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
        <Arrow className='h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
      </div>
    </section>
  );
}
