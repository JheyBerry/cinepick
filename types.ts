export type MovieSumary = {
  Poster?: string;
  Title?: string;
  Genre?: string;
  Year?: string;
  Index?: number;
  $vectorize?: string;
  $vector?: Array<number>;
  $similarity?: number;
  _id?: string;
};

export type MovieProps = {
  _id: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Director: string;
  $vectorize: string;
  $vector: Array<number>;
  Writer: string;
  Actors: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Title: string;
  Genre: string;
  Year: string;
  Index: number;
  $similarity: number;
}

export type MovieOnFocus = {
  movie: MovieSumary;
  index: number;
};

export type ControlProps = {
  sliderData: MovieSumary[];
  movieCollection: MovieSumary[];
  transitionData: MovieSumary;
  handleData: React.Dispatch<React.SetStateAction<MovieSumary[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<MovieSumary>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<MovieOnFocus>
  >;
  initData: MovieSumary;
  currentSlideData: MovieOnFocus;
}

export type ProgressProps = {
  curIndex: number;
  length: number;
}

export type textProps = {
  text?: string;
  className?: string;
}

export type MovieCardProps = {
  movie: MovieSumary;
  className?: string;
};
