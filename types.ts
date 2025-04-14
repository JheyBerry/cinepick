export type MovieSumary = {
  Poster: string;
  Title: string;
  Genre: string;
  Year: string;
  Index: number;
  $vectorize: string;
  $similarity: number;
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
} & MovieSumary;

export type SimilarMovie = {
  $similarity: number;
} & MovieProps;

export type MovieOnFocus = {
  movie: MovieProps;
  index: number;
};

export type MovieInfoProps = {
  transitionData: MovieProps;
  currentSlideData: MovieOnFocus;
};

export type ControlProps = {
  sliderData: MovieSumary[];
  movieCollection: MovieProps[];
  handleData: React.Dispatch<React.SetStateAction<MovieSumary[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<MovieProps>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<MovieOnFocus>
  >;
  initData: MovieProps;
} & MovieInfoProps;

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
