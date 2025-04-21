import { Link, useParams } from 'react-router-dom';
import Arrow from '@/assets/arrow.svg?react';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase';
import { Song, Album } from '@/types/interfaces';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function AlbumDynamic() {
  const { genreId, albumId } = useParams();
  const [songs, setSongs] = useState<Song[]>([]);
  const [album, setAlbum] = useState<Album>();
  const [hoveredSongId, setHoveredSongId] = useState<number | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const { data: albumResult, error } = await supabase
          .from('albums')
          .select('*')
          .eq('id', albumId)
          .single();

        if (error) {
          console.error('Error fetching albums:', error.message);
        } else {
          setAlbum(albumResult);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchAlbumData();
  }, [albumId, genreId]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data: songs, error } = await supabase
          .from('songs')
          .select('*')
          .eq('album', albumId)
          .order('id', { ascending: true });
        if (error) {
          console.error('Error fetching songs:', error.message);
        } else {
          setSongs(songs);
          // setCurrentSong(songs[0]);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchSongs();
  }, [genreId, albumId]);

  const playNextSong = () => {
    if (!currentSong) return;
    const newSongId = currentSong?.id + 1;
    const newSong = songs.find((song) => song.id === newSongId);
    setCurrentSong(newSong ?? songs[0]);
  };

  const playPreviousSong = () => {
    if (!currentSong) return;
    const newSongId = currentSong?.id - 1;
    const newSong = songs.find((song) => song.id === newSongId);
    setCurrentSong(newSong ?? songs[songs.length - 1]);
  };

  return (
    <section className='grid grid-cols-3'>
      <article
        className='col-span-1 flex h-screen flex-col justify-between overflow-hidden'
        style={{ backgroundColor: album?.color ?? '#460809' }}
      >
        <Link to={`/genre/${genreId}`}>
          <Arrow className='mt-2 h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
        </Link>

        {album && (
          <>
            <div className='flex flex-col items-center space-y-5 px-2'>
              <img
                className='h-72 w-72 rounded-sm outline outline-amber-50'
                src={album?.cover}
                alt='manson'
              />
              <h2 className='font-inter font-bold capitalize'>
                {album?.title}
              </h2>
              <p className='font-karla capitalize'>
                <span className='font-bold'>Artist: </span>
                {album?.artist}
              </p>
              <p className='font-karla'>
                <span className='font-bold'>Year: </span>
                {album?.year}
              </p>
              <div
                className={`w-full transition-opacity duration-1000 ${currentSong ? 'opacity-100' : 'opacity-0'}`}
              >
                <AudioPlayer
                  src={currentSong?.url}
                  autoPlayAfterSrcChange
                  onEnded={playNextSong}
                  onClickNext={playNextSong}
                  onClickPrevious={playPreviousSong}
                  showSkipControls
                  showJumpControls={false}
                />
              </div>
            </div>
          </>
        )}
      </article>

      <article className='col-span-2 flex h-screen flex-col items-center justify-center bg-linear-to-r from-[#252a2d] to-black px-1'>
        {songs.map((song) => (
          <button
            key={song.id}
            onClick={() => setCurrentSong(song)}
            onMouseEnter={() => setHoveredSongId(song.id)}
            onMouseLeave={() => setHoveredSongId(null)}
            className={`flex h-20 w-full cursor-pointer items-center justify-between rounded-sm hover:bg-[#252a2d] ${currentSong?.id === song.id && 'bg-[#252a2d]'}`}
          >
            <div className='flex'>
              <p className='font-inter mx-5 w-2'>
                {hoveredSongId === song.id ? '▶' : song.id}
              </p>
              <p className='font-inter'>{song.title}</p>
            </div>
            <p className='mr-7'>02:46</p>
          </button>
        ))}
      </article>
    </section>
  );
}
