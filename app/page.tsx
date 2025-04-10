import db from "../db";
import MovieCard from "../components/MovieCard";
import { MovieProps } from "../types";

export default async function Home() {
  const movies = db.collection("movies");
  const result = (await movies.find({}, {}).toArray()) as MovieProps[];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <h1 className="text-3xl font-bold underline">Movie List</h1>
      <div className="absolute h-full w-full">
        <div className="flex h-full w-full grid-cols-10">
          <div className="col-span-4 flex h-full flex-1 flex-col px-5 mb-3">
            <h1 className="text-3xl font-bold underline">Movies</h1>
          </div>
          <div className="col-span-6 flex h-full flex-1 flex-col p-4">
            <div className="flex w-full gap-6">
              {result.map((movie) => {
                return <MovieCard key={movie._id} movie={movie} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
