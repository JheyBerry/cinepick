import MovieCards from "../components/MovieCard";
import { FetchAllMoviesData} from "../services/movies";
export const revalidate = 60 * 60 * 24;

export default async function Home() {
  const movies = await FetchAllMoviesData();

  return (
    <div className="flex items-center justify-center pb-24 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {movies.map((movie) => (
          <MovieCards key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
