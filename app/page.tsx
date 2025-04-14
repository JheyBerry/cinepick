import db from "../db";
import MoviesCarousel from "../components/MovieCarousel";
import { MovieProps } from "../types";

export default async function Home() {
  const movieCollection = db.collection("movies");
  const movies = (await movieCollection.find({}, {}).toArray()) as MovieProps[];

  return (
    <div className="flex h-screen">
        <div className="col-span-4 flex flex-1 justify-center items-center flex-col px-5 mb-3">
          <h1 className="text-3xl font-bold underline">Movies</h1>
        </div>
        <div className="col-span-6 flex justify-center items-center flex-1 flex-col p-4">
          <div className="relative w-full gap-6">
            <MoviesCarousel movies={movies} />
          </div>
        </div>
    </div>
  );
}
