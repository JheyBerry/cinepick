interface MovieProps {
  Title: string;
  Poster: string;
}

function Movie({ movie }: { movie: MovieProps }) {
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

export default Movie;
