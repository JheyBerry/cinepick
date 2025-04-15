import SimilarMovies from "../../../components/SimilarMovies";
import MovieInfo from "../../../components/MovieInfo";
import MovieBackground from "../../../components/MovieBackground";
import { FetchSimilarMoviesData } from "../../../services/movies";

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="flex relative min-h-screen select-none overflow-hidden text-white antialiased">
      <AsyncMoviePageComponents params={params} />
    </div>
  );
}

async function AsyncMoviePageComponents({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const similarMoviesData = await FetchSimilarMoviesData({ params: { id } });
  const movie  = similarMoviesData.movie;
  const similarMovies = similarMoviesData.similarMovies.map((movie: any) => ({
    ...movie,
    _id: movie._id ?? undefined, // Ensure _id is string | undefined
  }));

  console.log("type of similarMovies", Array.isArray(similarMovies))

  if (!movie || similarMovies === undefined) {
    return <div className="text-white">Movie data could not be loaded.</div>;
  }

  return (
    <>
      <MovieBackground Poster={movie.Poster}/>
      <div className="flex h-screen overflow-hidden">
        <MovieInfo Genre={movie.Genre} Title={movie.Title} $vectorize={movie.$vectorize}/>
        <SimilarMovies
          similarMoviesData={similarMovies}
        />
      </div>
    </>
  );
}
