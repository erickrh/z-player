export interface Song {
  id: number;
  createdAt: Date;
  title: string;
  url: string;
  album: number;
  duration: string;
}

export interface Album {
  cover: string;
  created_at: Date;
  genre: number;
  id: number;
  title: string;
  artist: string;
  year: number;
  color: string;
  animate_cover: string;
}

export interface GenreCardProps {
  name: string;
  cover: string;
  id: number;
}
