export type MovieProps = {
  _id?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Director?: string;
  $vectorize?: string;
  $vector?: Array<number>;
  Writer?: string;
  Actors?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
  Title?: string;
  Genre?: string;
  Year?: string;
  Index?: number;
  $similarity?: number;
}

export type MovieOnFocus = {
  movie: MovieProps;
  index: number;
};

export type ControlProps = {
  sliderData: MovieProps[];
  similarMoviesData: MovieProps[];
  transitionData: MovieProps;
  handleData: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<MovieProps>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<MovieOnFocus>
  >;
  initData: MovieProps[];
  currentSlideData: MovieOnFocus;
}

export type ControlButtonProps = {
  handleClick: () => void;
  isDisabled?: boolean;
  previous?: boolean;
  next?: boolean;
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
  movie: MovieProps;
  className?: string;
};
