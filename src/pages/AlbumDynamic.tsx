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
  const [artistName, setArtistName] = useState<string>('');

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
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchSongs();
  }, [genreId, albumId]);

  useEffect(() => {
    const fetchArtistName = async () => {
      try {
        const { data: artistNameData, error } = await supabase
          .from('artist')
          .select('name')
          .eq('uuid', album?.artist)
          .single();
        if (error) {
          console.error('Error fetching artist name:', error.message);
        } else {
          setArtistName(artistNameData.name);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (album?.artist) {
      fetchArtistName();
    }
  }, [album?.artist]);

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

  const isVideoCover = album?.animate_cover.includes('mp4');

  return (
    <section className='grid-cols-3 sm:flex sm:justify-end'>
      <article
        className={`col-span-1 flex flex-col justify-between overflow-hidden ${currentSong ? 'pb-0' : 'pb-4'} sm:fixed sm:top-0 sm:left-0 sm:h-screen sm:w-1/3 sm:pb-0`}
        style={{ backgroundColor: album?.color ?? '#181a1b' }}
      >
        <Link to={`/genre/${genreId}`} className='w-max'>
          <Arrow className='mt-2 h-20 w-20 cursor-pointer fill-red-400 hover:fill-amber-50' />
        </Link>

        {album && (
          <>
            <div className='flex flex-col items-center space-y-4 px-2'>
              {isVideoCover ? (
                <video
                  className='h-72 w-72 rounded-sm object-cover outline outline-amber-50'
                  src={album?.animate_cover}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className='mt-5 h-72 w-72 rounded-sm object-cover outline outline-amber-50 sm:mt-0'
                  src={album?.animate_cover}
                />
              )}

              <h2 className='font-inter font-bold capitalize'>
                {album?.title}
              </h2>
              <p className='font-karla capitalize'>
                <span className='font-bold'>Artist: </span>
                {artistName ? artistName : ''}
              </p>
              <p className='font-karla'>
                <span className='font-bold'>Year: </span>
                {album?.year}
              </p>
            </div>
            <div
              className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                currentSong ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
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
          </>
        )}
      </article>

      <article className='col-span-2 flex h-full flex-col items-center justify-center overflow-auto px-1 sm:w-2/3'>
        {songs.map((song) => (
          <button
            key={song.id}
            onClick={() => setCurrentSong(song)}
            onMouseEnter={() => setHoveredSongId(song.id)}
            onMouseLeave={() => setHoveredSongId(null)}
            className={`flex h-14 w-full cursor-pointer items-center justify-between rounded-sm hover:bg-[#252a2d] ${currentSong?.id === song.id && 'bg-[#252a2d]'}`}
          >
            <div className='flex overflow-hidden'>
              <p className='font-inter mx-5 w-2'>
                {hoveredSongId === song.id ? '▶' : song.id}
              </p>
              <p className='font-inter truncate'>{song.title}</p>
            </div>
            <p className='mr-7'>{song.duration}</p>
          </button>
        ))}
      </article>
    </section>
  );
}
